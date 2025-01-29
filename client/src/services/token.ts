import axios from 'axios';
import { SUPABASE_URL } from '../lib/constants';
import { formatToken } from './utils';

export const getUserTokens = async (address:string,network:string) => {
    try {
        const { data } = await axios.post(`${SUPABASE_URL}/functions/v1/getTokens`,{
            address,network
        });

        const tokens = data.map((token:any) => formatToken(token));

        return tokens;
    } catch (error:any) {
            throw new Error(error?.message);
    }
}

// export const getUserStakedTokens = async (address:string,network:string) => {
//     try {
//         const data = getUserTokens(address,network);

//     } catch (error:any) {
//             throw new Error(error?.message);
        
//     }
// }