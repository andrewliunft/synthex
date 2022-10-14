import React,{useState, useContext,useEffect}from 'react';
import {
  Flex, Text, Box, useColorMode, Button, UnorderedList, ListItem, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, useDisclosure, Image,
} from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { Routes, Route, Link } from "react-router-dom";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { FaBars } from 'react-icons/fa';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import darklogo from '../src/Assets/dark_logo.svg'
import lightlogo from '../src/Assets/light_logo.svg'
import MetamaskConnect from './MetamaskConnect';
import ConnectOptModal from './modals/ConnectOptModal'
import { appContext } from './Collaterals'
declare var window: any
function Navbar() {
  const [newAddress, setnewAddress] = useState("")
	const [newTronAddress, setnewTronAddress] = useState("")
  const appData = useContext(appContext)
  const { toggleColorMode } = useColorMode();
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()


  // useEffect(() => {
  //   let data;
  //    let newtrondata;
  //       data = window.localStorage.getItem('address');
  //     setnewAddress(data)
  //     newtrondata = window.localStorage.getItem('tron');
  //     setnewTronAddress(newtrondata)
      
  // }, [newAddress,newTronAddress])


  let   data = window.localStorage.getItem('address');
  let  newtrondata = window.localStorage.getItem('tron');
  return (
    <>
      <Flex justify={"space-between"} alignItems={"center"} m="auto" maxWidth={"1300px"}>
        <Box cursor={"pointer"}>
          <Image src={colorMode == "dark" ? darklogo : lightlogo} alt="" width="100px" height="100px" />
        </Box>
        <Box display={{ sm: "none", md: "none", lg: "block" }}>

          <UnorderedList display={"flex"} alignItems="center" justifyContent={"space-around"} minWidth="20rem" listStyleType="none">


            <ListItem mx="1rem">
              <Link to="/collaterals" >
                <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                Collaterals
                </Text>
              </Link>
            </ListItem>
            <ListItem mx="1rem">
              <Link to="/convert"  >
                <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                  Convert
                </Text>
              </Link>
            </ListItem>

            <ListItem mx="1rem">
              <Link  to="/basictrading" >
                <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                  Basic Trading
                </Text>
              </Link>
            </ListItem>

            <ListItem mx="1rem">
              <Link to="/market">
                <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                  Market
                </Text>
              </Link>
            </ListItem>

            <ListItem mx="1rem">
              <Link to="/margintrading" >
                <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                  Margin Trading
                </Text>
              </Link>
            </ListItem>

            <ListItem mx="1rem">
              <Link to="/myaccount">
                <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                  My Account
                </Text>
              </Link>
            </ListItem>

            <ListItem >
              {( data) ?
                <>
                  <Menu>
                    <MenuButton as={Button} w="10rem" border="2px solid gray" rightIcon={<MdKeyboardArrowDown />}>
                      <Text overflow={"hidden"} whiteSpace="nowrap" textOverflow={"ellipsis"}>{data}</Text>
                    </MenuButton>
                    <MenuList width={"8rem"}>
                      <MenuItem fontFamily={"satoshi"} onClick={() => {
                  localStorage.removeItem("address")
                  window.location.reload()
                      }} >
                        Disconnect
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </> : newtrondata?
                  <> <Menu >
                    <MenuButton as={Button} maxW="8rem" rightIcon={<MdKeyboardArrowDown />}>
                      <Text overflow={"hidden"} whiteSpace="nowrap" textOverflow={"ellipsis"}>{newtrondata}</Text>
                    </MenuButton>
                    <MenuList>
                      <MenuItem fontFamily={"satoshi"} onClick={() => {
                  localStorage.removeItem("tron")
                  window.location.reload()
                      }} >
                        Disconnect
                      </MenuItem>
                    </MenuList>
                  </Menu> </>

                  : <ConnectOptModal />}
            </ListItem>
            <ListItem mx="1rem">
              <Button variant={"outline"} width={"100%"} onClick={toggleColorMode} > {colorMode == "dark" ? <BsMoonFill size={25} /> : <BsSunFill size={25} />}</Button>
            </ListItem>
          </UnorderedList>
        </Box>


        <Box display={{ sm: "block", lg: "none" }}>
          <FaBars size={35} onClick={onOpen} />
        </Box>

      </Flex>

      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent alignItems={"stretch"}>
          <DrawerHeader borderBottomWidth='1px'>
            <Flex alignItems={"center"} justifyContent="center">
              <Image src={colorMode == "dark" ? darklogo : lightlogo} alt="" width="100px" height="100px" />
            </Flex>
            <Box mt="0.5rem" minWidth={"100%"}>
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <nav >
              <UnorderedList display={"flex"} flexDirection="column" alignItems={"strech"} justifyContent={"center"} listStyleType="none">
                {/* <ListItem my="0.5rem">
              <Link href="/">
                <Button variant={"outline"} w="100%"  className={router.pathname=="/" ? "sidebar_link_active ":""} fontSize="2xl" my="0.5rem" cursor={"pointer"} onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                  Home
                </Button>
              </Link>
            </ListItem> */}

                <ListItem mx="1rem">
                  <Link to="/convert">
                    <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                      Convert
                    </Text>
                  </Link>
                </ListItem>
                <ListItem mx="1rem">
                  <Link to= "/basictrading" >
                    <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                      Basic Trading
                    </Text>
                  </Link>
                </ListItem>
                <ListItem mx="1rem">
                  <Link to= "/market">
                    <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                      Market
                    </Text>
                  </Link>
                </ListItem>
                <ListItem mx="1rem">
                  <Link to="/margintrading" >
                    <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                      Margin Trading
                    </Text>
                  </Link>
                </ListItem>
                <ListItem mx="1rem">
                  <Link to= "/myaccount">
                    <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                      My Account
                    </Text>
                  </Link>
                </ListItem>

                <ListItem my="0.5rem">
              {(data ) ?
                <>
                  <Menu >
                    <MenuButton as={Button} w="10rem" border="2px solid gray" rightIcon={<MdKeyboardArrowDown />}>
                      <Text overflow={"hidden"} whiteSpace="nowrap" textOverflow={"ellipsis"}>{data }</Text>
                    </MenuButton>
                    <MenuList width={"8rem"}>
                      <MenuItem fontFamily={"satoshi"} onClick={() => {
                  localStorage.removeItem("address")
                  window.location.reload()
                      }} >
                        Disconnect
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </> : newtrondata?
                  <> <Menu >
                    <MenuButton as={Button} maxW="8rem" rightIcon={<MdKeyboardArrowDown />}>
                      <Text overflow={"hidden"} whiteSpace="nowrap" textOverflow={"ellipsis"}>{newtrondata}</Text>
                    </MenuButton>
                    <MenuList>
                      <MenuItem fontFamily={"satoshi"} onClick={() => {
                  localStorage.removeItem("tron")
                  window.location.reload()
                      }} >
                        Disconnect
                      </MenuItem>
                    </MenuList>
                  </Menu> </>

                  : <ConnectOptModal />}
            </ListItem>
                <ListItem my="0.5rem">
                  <Button variant={"outline"} width={"100%"} onClick={toggleColorMode} > {colorMode == "dark" ? <BsMoonFill size={25} /> : <BsSunFill size={25} />} <Text ml="1rem">{colorMode == "light" ? "light" : "dark"} mode</Text></Button>
                </ListItem>
              </UnorderedList>
            </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navbar 