export type AddressType  = {
    11155111: string;
    56: string;
  }
  
  export enum CHAIN_ID {
    TESTNET = 11155111,
    MAINNET = 1,
  }
  
  export default function getChainIdFromEnv(): number {
    const env = process.env.NEXT_PUBLIC_CHAIN_ID;
    if (!env) { return 11155111;}
    return parseInt(env);
  }
  
  
  export const getRPC = () => {
    if (getChainIdFromEnv() === CHAIN_ID.MAINNET)
      return process.env.NEXT_PUBLIC_RPC_MAINNET;
    return process.env.NEXT_PUBLIC_RPC_TESTNET;
  }
  export const SMART_ADDRESS ={
    CROWD_SALE: {11155111: '0x93054573540d471d0e4aD3a4115065F0E2221ba3', 1: ''},
    USDT: {11155111: '0xE30dF2D35D5E61cA57AebF936b727a5750cf2beE', 1: ''},
  }