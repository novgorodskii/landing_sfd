import { Box, Flex, Button, Text, useMediaQuery } from "@chakra-ui/react";
import Logo from "./Logo";
import { NAV_LINKS, SOCIAL_LINKS } from "../constants/shared";
import NavLink from "./NavLink";
import Image from "next/image";

const Footer = () => {
  const [isInColumn] = useMediaQuery("(max-width: 529px)");
  return (
    <Flex
      mt={{ base: "68px", md: "100px" }}
      mb={{ base: "55px", md: "84px" }}
      justify="space-between"
      alignItems="flex-start"
      flexDir={isInColumn ? "column" : "row"}
      gap={isInColumn ? "65px" : 0}
    >
      <Box>
        <Box marginBottom={8}>
          <Logo />
        </Box>
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
      </Box>
      <Flex gap={{ base: "100px", lg: "144px" }}>
        <Flex flexDir="column" gap="20px">
          <Text
            fontSize="16px"
            lineHeight="19px"
            color="#fff"
            fontWeight={700}
            opacity={0.5}
          >
            Links
          </Text>
          <Flex
            flexDir="column"
            gap="16px"
            fontSize="18px"
            fontWeight={400}
            lineHeight="140%"
            color="#fff"
          >
            {NAV_LINKS.map((navLink) => (
              <NavLink
                key={navLink?.id}
                title={navLink?.title}
                to={navLink?.to}
              />
            ))}
          </Flex>
        </Flex>
        <Flex flexDir="column" gap="20px">
          <Text
            fontSize="16px"
            lineHeight="19px"
            fontWeight={700}
            color="#fff"
            opacity={0.5}
          >
            Social
          </Text>
          <Flex
            flexDir="column"
            gap="16px"
            fontSize="18px"
            fontWeight={400}
            lineHeight="140%"
            color="#fff"
          >
            {SOCIAL_LINKS.map((socLink) => (
              <NavLink
                key={socLink?.id}
                title={socLink?.title}
                to={socLink?.to}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
