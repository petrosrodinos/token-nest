import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Moralis from "npm:moralis";
import { EvmChain } from "npm:@moralisweb3/common-evm-utils";

const MORALIS_API_KEY = Deno.env.get("MORALIS_API_KEY");

if (!MORALIS_API_KEY) {
  throw new Error("MORALIS_API_KEY is required.");
}

await Moralis.start({
  apiKey: MORALIS_API_KEY,
});

Deno.serve(async (req) => {
  try {
    const { address, network } = await req.json();

    if (!address || !network) {
      return new Response(
        JSON.stringify({ error: "Address and network are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const chain = EvmChain[network.toUpperCase()];
    if (!chain) {
      return new Response(
        JSON.stringify({ error: "Invalid network." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const response = await Moralis.EvmApi.token.getWalletTokenBalances({
      address,
      chain,
    });

    return new Response(
      JSON.stringify(response.toJSON()),
      { headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }
});