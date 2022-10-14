import React,{useEffect} from 'react';
import './App.css';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, getDefaultWallets, darkTheme } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";
import { Routes, Route, Link } from "react-router-dom";
import Landing from './Landing';
import Basictrading from './Basictrading';
import { Navigate } from "react-router-dom";
import Myaccount from './Myaccount'
import Collaterals from './Collaterals'
function App() {

  const { chains, provider, webSocketProvider } = configureChains(
    [
      // chain.goerli,
      chain.localhost
    ],
    [
      alchemyProvider({
        // This is Alchemy's default API key.
        // You can get your own at https://dashboard.alchemyapi.io
        apiKey: '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC',
      }),
      publicProvider(),
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'RainbowKit App',
    chains,
  });
  
  const wagmiClient = createClient({
    autoConnect: false,
    connectors,
    provider,
    webSocketProvider,
  });
  
  const config: ThemeConfig = {
    initialColorMode: 'dark',
  }
  
  const breakpoints ={
    sm: "360px",
    md: "768px",
    lg: "1024px",
    xl: "1440px",
    "2xl": "1680px"
  };
  
  const styles = {
    global: (props:any) => ({
      body: {
        // color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('gray.100', '#141214')(props),
      },
    }),
  };
  const theme = extendTheme({ config,breakpoints,styles })




  

  let  data = window.localStorage.getItem('address');
  let  trondata = window.localStorage.getItem('tron');
  console.log("data",data,trondata)
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/basictrading" element={(trondata || data) ? <Basictrading />:<Navigate  replace={true} to="/collaterals"/>} />
            <Route path="/myaccount" element={(trondata || data) ?<Myaccount />:<Navigate replace={true} to="/collaterals" />} />
            <Route path="/collaterals" element={<Collaterals />} />
          </Routes>
        </RainbowKitProvider>
    </WagmiConfig>
    </ChakraProvider>
  );
}

export default App;
