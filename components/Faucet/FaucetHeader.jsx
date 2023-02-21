import { Box, Container, Flex } from "@chakra-ui/react";
import Link from "next/link";
import ConnectBtn from "../ConnectBtn";
import { Logo } from "../Logo";

const FaucetHeader = () => {
  return (
    <Box py={4} px={2} bg="#16191D">
      <Container maxW="container.2xl">
        <Flex alignItems="center">
          <Flex flex={"1 0 0"} justifyContent="flex-start">
            <Logo />
          </Flex>
          <ConnectBtn />
        </Flex>
      </Container>
    </Box>
  );
};

export default FaucetHeader;
