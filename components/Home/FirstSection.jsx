import { Flex, Heading, Text, Button, Container } from "@chakra-ui/react";
import Image from "next/image";

const FirstSection = () => {
  return (
    <Container maxW="1150px" p={0}>
      <Flex flexDir="column" gap="30px">
        <Heading
          as="h1"
          fontSize={{ base: "36px", lg: "52px", xl: "74px" }}
          lineHeight="120%"
          fontWeight={700}
          maxW="1036px"
          bg="linear-gradient(180deg, rgba(10, 10, 57, 0.414) -16.61%, rgba(255, 255, 255, 0.31875) 48.53%, rgba(13, 15, 42, 0.426) 106.01%), #FFFFFF;"
          bgClip="text"
        >
          Constellation of decentralized products and services
        </Heading>
      </Flex>
    </Container>
  );
};

export default FirstSection;
