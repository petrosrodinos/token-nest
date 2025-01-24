
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

import {createClient} from 'npm:@supabase/supabase-js';


console.log("Hello from Create Token function!");

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  // Deno.env.get("SUPABASE_ANON_KEY")!
);


Deno.serve(async (req) => {
  try {
    // Parse the request body to get the required fields
    const { address, name, symbol, supply } = await req.json();

    // Validate that all required fields are present
    if (!address || !name || !symbol || !supply) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: address, name, symbol, or supply" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Insert the data into the 'tokens' table
    const { data, error } = await supabase
      .from('tokens')
      .insert([{ address, name, symbol, supply }])
      .select(); // Optional: Return the inserted row

    if (error) {
      throw new Error(error.message);
    }

    // Return a success response with the inserted data
    return new Response(
      JSON.stringify({ success: true, data }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    // Handle any errors
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});

