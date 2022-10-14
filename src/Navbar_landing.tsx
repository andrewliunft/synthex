import {
  Flex, Text, Box, useColorMode, Button, UnorderedList, ListItem, Image,AvatarGroup,
 useDisclosure, 
} from '@chakra-ui/react'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import React,{useContext} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { useAccount } from 'wagmi'
import darklogo from '../src/Assets/dark_logo.svg'
import lightlogo from '../src/Assets/light_logo.svg'
import { appContext } from './Collaterals'
import twitter from '../src/Assets/twitter.svg'
import discord from '../src/Assets/discord.webp'
function Navbar_landing() {
	const AppData = useContext(appContext)
  const { toggleColorMode } = useColorMode();
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex justify={"space-between"} alignItems={"center"}>
        <Box cursor={"pointer"} >
          <Image src={colorMode == "dark" ? darklogo : lightlogo} alt=""  width="100px" height="100px" />
        </Box>


        <Box >
          <UnorderedList display={"flex"} alignItems="center" justifyContent={"flex-end"}  minWidth="20rem" listStyleType="none">

            <ListItem mx="1rem">
              <Link to="https://twitter.com/ChainScoreHQ" target="_blank">
              <Image 
       src={twitter} alt="" width="40px" height="40px" />
              </Link>
            </ListItem>
            <ListItem mx="1rem">
              <Link to="https://discord.com/invite/ZhKsjC8464"  target="_blank">
              <Image 
       src={discord} alt="" width="40px" height="40px" />
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
     
    </>
  )
}

export default Navbar_landing 