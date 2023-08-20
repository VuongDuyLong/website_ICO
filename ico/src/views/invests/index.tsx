
declare var window: any;
import React, { useState } from 'react';
import { Flex, Heading, Spacer, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { ConnectWallet,SuccessModal, WalletInfo } from '../../components';
import { IPackage, IRate, IWalletInfo, TOKEN } from '../../_types_';
import { ethers } from 'ethers';
import { packages } from "../../constants";
import InvestCard from "./components/InvestCard";
import CrowSaleContract from "../../contracts/CrowdSaleContract";
import UsdtContract from "../../contracts/UsdtContract";

export default function InvestView() {
  const [wallet, setWallet] = useState<IWalletInfo>();
  const [rate, setRate] = React.useState<IRate>({ethRate: 0, usdtRate: 0});
  const [web3Provider, setWeb3Provider] = useState<ethers.providers.Web3Provider>();
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
  const [pak, setPak] = React.useState<IPackage>();
  const [txHash, setTxHash] = React.useState<string>();
  const {isOpen, onClose, onOpen} = useDisclosure();


  const getRate = React.useCallback(async() => {
  const crowdContract = new CrowSaleContract();
  const ethRate =  await crowdContract.getEthRate();
  const usdtRate = await crowdContract.getUsdtRate();  
    setRate({ethRate, usdtRate});

  }, []);

  React.useEffect(() => {
    getRate();
  }, [getRate]);


  const onConnectMetamask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer =  provider.getSigner();
        const address = await signer.getAddress();
        console.log("Account:", address);
        const bigBalance = await signer.getBalance();
        const ethBalance = Number.parseFloat(ethers.utils.formatEther(bigBalance));
        setWallet({ address, eth: ethBalance });
        setWeb3Provider(provider);
      } catch (error) {
        console.error('Error connecting to Metamask:', error);
      }
    }
  };
  const handleBuyIco = async(pk: IPackage) => {
    if (!web3Provider) return;
      setPak(pk);
      setIsProcessing(true);
      let hash ='';
      const crowdContract = new CrowSaleContract(web3Provider);
      if (pk.token === TOKEN.USDT) {
        const usdtContract = new UsdtContract(web3Provider);
        await usdtContract.approve(crowdContract._contractAddress, pk.amount / rate.ethRate);
        hash = await crowdContract.buyTokenByUSDT(pk.amount);
      } else {
        hash = await crowdContract.buyTokenByETH(pk.amount);
      }
      setTxHash(hash);
      onOpen();
    try {

    } catch(er: any) {

    }
    setPak(undefined);
    setIsProcessing(false);
  };
  
  return (
    <>
     <SimpleGrid columns={{ base: 1, lg: 3}}  mt="50px" spacingY="20px">
        {packages.map((pk, index) => 
        <InvestCard
            pak={pk}
            key={String(index)}
            isBuying={isProcessing && pak?.key === pk.key}
            rate={pk.token === TOKEN.ETH ? rate.ethRate : rate.usdtRate}
            walletInfo={wallet}
            onBuy={() => handleBuyIco(pk)}
          />)}
      </SimpleGrid>
      <SuccessModal 
        isOpen={isOpen}
        onClose={onClose}
        hash={txHash}
        
      />
  
    </>
  );
}
