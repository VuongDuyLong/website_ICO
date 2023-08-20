declare var window: any;
import { ConnectWallet, WalletInfo } from "@/components";
import { menus } from "../constants";
import { setWalletInfo, setWeb3Provider } from "@/reduxs/accounts/account.slices";
import { useAppDispatch, useAppSelector } from "@/reduxs/hooks";
import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { ethers } from "ethers"; 
import Link from "next/link";
import { useRouter } from "next/router";
import React, {ReactNode} from 'react';

interface IProps {
  children: ReactNode;
}

export default function MainLayout({children}: IProps) {
  const router = useRouter();
  console.log(router.pathname)

  const dispatch = useAppDispatch();
  const {wallet} = useAppSelector((state) => state.account);

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
        dispatch(setWalletInfo({ address, eth: ethBalance }));
        dispatch(setWeb3Provider(provider));
      } catch (error) {
        console.error('Error connecting to Metamask:', error);
      } 
    }
  };

  return (
    <Flex
      w={{ base: "full", lg: "70%" }}
      flexDirection="column"
      margin="50px auto"
    >
      <Flex w="full" alignItems="center" justifyContent="center">
        <Heading size="lg" fontWeight="bold">
          Blockchain Trainee
        </Heading>
        <Spacer />
        {menus.map((menu) => <Link href={menu.url} key={menu.url}>
            
              <Text mx="20px" fontSize="20px" textDecoration="underline">{menu.name}</Text>
        
        </Link>)}
      
        {!wallet && (
          <ConnectWallet
            onClick={onConnectMetamask}
          />
        )}
        {wallet && (
          <WalletInfo address={wallet?.address} amount={wallet?.eth || 0} />
        )}
      </Flex>
      <Flex w="full" flexDirection="column" py="50px">
         {children}
      </Flex>     
    </Flex>
  );
}