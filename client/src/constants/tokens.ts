import { BoughtToken,StakedToken } from "../interfaces/token";

export const tokenImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8jdjLUPZk7HoxEG4C7qMG2723TlZQBkMig&s'

export const BoughtTokens: BoughtToken[] = [
  {
    name: "FIRST",
    symbol: "FRS",
    imageUrl:tokenImage,
    supply: 100000,
    address:'0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    balance: '100'
  },
  {
    name: "PETRA",
    symbol: "PTRA",
    imageUrl:tokenImage,
    supply: 100000,
    address:'0x9A676e781A523b5d0C0e43731313A708CB607508',
    balance: '100'

  },
]

export const StakedTokens: StakedToken[] = [
  {
    name: "FIRST",
    symbol: "FRS",
    imageUrl:tokenImage,
    supply: 100000,
    address:'0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    staked: '50'
  },
  {
    name: "PETRA",
    symbol: "PTRA",
    imageUrl:tokenImage,
    supply: 100000,
    address:'0x9A676e781A523b5d0C0e43731313A708CB607508',
    staked: '50'

  },
]
