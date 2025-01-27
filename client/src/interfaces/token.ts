export interface Token {
  imageUrl?: string;
  name: string;
  symbol: string;
  supply: number;
  address: string;
}

export interface BoughtToken extends Token{
  balance:string;
}


export interface StakedToken extends Token{
  staked:string;
}