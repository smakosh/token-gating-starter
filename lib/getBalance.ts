import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: process.env.ALCHEMY_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const getBalance = async (
  ownerAddress: string,
  tokenContractAddresses: string[]
) => await alchemy.core.getTokenBalances(ownerAddress, tokenContractAddresses);

export default getBalance;
