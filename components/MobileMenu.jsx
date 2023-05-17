import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Text,
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Box,
} from "@chakra-ui/react";
import Logo from "./Logo";
import { CloseIcon } from "../icons/CloseIcon";
import NavLink from "./NavLink";
import Image from "next/image";

const MobileMenu = ({ isOpen, setIsOpen, navigation }) => {
  return (
    <>
      <IconButton
        bg="transparent"
        aria-label="Open mobile menu"
        onClick={() => setIsOpen(true)}
      >
        <HamburgerIcon boxSize="32px" />
      </IconButton>
      <Drawer size="full" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerOverlay />
        <DrawerContent p="24px 16px" bg="#050506" pos="relative" w="100%">
          <Box
            h="100%"
            w="100%"
            pos="absolute"
            bgImg="/images/mobile-menu-bg.png"
            bgRepeat="no-repeat"
            bgSize="100%"
            bgPos="center"
            m="-16px"
            zIndex={-1}
          />
          <DrawerHeader
            p={0}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Logo />
            <CloseIcon boxSize="32px" onClick={() => setIsOpen(false)} />
          </DrawerHeader>
          <DrawerBody
            h="100%"
            p={0}
            display="flex"
            flexDir="column"
            gap="40px"
            justifyContent="center"
            alignItems="center"
          >
            {navigation.map((navItem) => (
              <NavLink
                key={navItem?.id}
                title={navItem?.title}
                to={navItem?.to}
                isMobile
                onClick={() => setIsOpen(false)}
              />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
