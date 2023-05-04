import { Flex, Button, Text } from "@chakra-ui/react";
import Logo from "./Logo";
import { NAV_LINKS } from "../constants/shared";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

const Header = () => {
  const [isDesktopHeader] = useMediaQuery("(min-width: 992px)");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      py={{ base: "24px", xl: "64px" }}
    >
      <Logo />
      {isDesktopHeader ? (
        <Flex
          gap="40px"
          alignItems="center"
          fontSize="16px"
          lineHeight="19px"
          fontWeight={400}
        >
          {NAV_LINKS.map((navLink) => (
            <NavLink key={navLink.id} title={navLink.title} to={navLink.to} />
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
        </Flex>
      ) : (
        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navigation={NAV_LINKS}
        />
      )}
    </Flex>
  );
};

export default Header;
