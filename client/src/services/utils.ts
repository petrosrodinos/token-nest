import { BoughtToken } from "../interfaces/token"
// import { ethers } from "ethers";

export const  formatToken = (token:any):BoughtToken => {

    // const formattedBalance = ethers.formatUnits(token.balance, token.decimals);

    return {
        name: token.name,
        symbol: token.symbol,
        supply: token.total_supply,
        address: token.token_address,
        balance: token.balance,
    }
}