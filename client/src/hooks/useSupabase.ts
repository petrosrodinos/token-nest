import { useState ,} from "react";
import { supabase } from "../lib/supabase";

export const useSupabase = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const getTokens = async () =>{
    setLoading(true);
    setError(null);
    
    const {data,error} = await supabase.from('tokens').select('*');

    if(error){
      setError(error.message);
    }

    setData(data);

    setLoading(false);

    return {data,error};


  }

    return {loading,error,data,getTokens};
};
