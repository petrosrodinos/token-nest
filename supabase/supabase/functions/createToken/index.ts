import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from 'npm:@supabase/supabase-js';
import { ethers } from "npm:ethers@6.7.1"; 

console.log("Hello from Create Token function!");

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

Deno.serve(async (req: any) => {
  try {
    const request = await req.json();

    if (!request || !request.logs || !Array.isArray(request.logs) || request.logs.length === 0) {
      console.log("Invalid request: logs array is missing or empty");
      return new Response(
        JSON.stringify({ error: "Invalid request: logs array is missing or empty" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const eventLog = request.logs[0]; 

    if (!eventLog.data || !eventLog.topic0) {
      console.log("Invalid event log: data or topic0 is missing");
      return new Response(
        JSON.stringify({ error: "Invalid event log: data or topic0 is missing" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const abi = [
      "event TokenCreated(address tokenAddress, uint256 initialSupply, string name, string symbol)"
    ];

    const iface = new ethers.Interface(abi);

    const topics = [eventLog.topic0];

    const decodedLog = iface.parseLog({
      data: eventLog.data,
      topics: topics,
    });

    if (!decodedLog) {
      console.log("Failed to decode log: the log does not match the expected event ABI");
      return new Response(
        JSON.stringify({ error: "Failed to decode log: the log does not match the expected event ABI" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const tokenAddress = decodedLog.args.tokenAddress;
    const initialSupply = decodedLog.args.initialSupply.toString();
    const name = decodedLog.args.name;
    const symbol = decodedLog.args.symbol;

  
    if (!tokenAddress || !initialSupply || !name || !symbol) {
      console.log("Missing required fields in event data");
      return new Response(
        JSON.stringify({ error: "Missing required fields in event data" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const { data: dbData, error } = await supabase
      .from('tokens')
      .insert([{ 
        address: tokenAddress, 
        supply: initialSupply, 
        name, 
        symbol 
      }])
      .select(); 

    if (error) {
      throw new Error(error.message);
    }

    console.log("Database record created successfully:", dbData);

    return new Response(
      JSON.stringify({ success: true, data: dbData }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.log("ERROR CATCH", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
});