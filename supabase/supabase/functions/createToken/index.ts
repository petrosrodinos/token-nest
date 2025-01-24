import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from 'npm:@supabase/supabase-js';

console.log("Hello from Create Token function!");

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

Deno.serve(async (req: any) => {
  try {
    const request = await req.json();
    const { logs } = request;

    const eventLog = logs[0]; 
    const {
      tokenAddress, 
      owner,      
      initialSupply, 
      name,       
      symbol      
    } = eventLog.data;

    console.log("EVENT DATA RECEIVED", request);

    if (!tokenAddress || !initialSupply || !name || !symbol) {
      return new Response(
        JSON.stringify({ error: "Missing required fields in event data" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const { data, error } = await supabase
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

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});