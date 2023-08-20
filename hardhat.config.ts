import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/853b33157f1c4a9e9c15670dd91706ed`,
      accounts: [process.env.PRIVATE_Key]
    }
  },
  etherscan: {
    apiKey: process.env.API_Key
    }
    
};
