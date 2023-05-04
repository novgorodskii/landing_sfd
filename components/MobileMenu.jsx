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
            <Button
              w="max-content"
              bg="#fff"
              borderRadius="500px"
              h="max-content"
              p="18px 42px"
              _hover={{ opacity: 0.8 }}
            >
              <Flex gap="8px" color="#090D0D">
                <Text fontSize="16px" lineHeight="19px" fontWeight={700}>
                  Wait List
                </Text>
                <Image
                  src="/images/arrow-right.svg"
                  alt="arrow-right"
                  width={18}
                  height={18}
                />
              </Flex>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
