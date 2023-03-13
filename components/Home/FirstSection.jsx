import { Flex, Heading, Text, Button, Container } from "@chakra-ui/react"
import Image from "next/image"

const FirstSection = () => {
  return (
    <Container maxW="1150px" mt={{ base: '100px', md: '160px'}}>
      <Flex flexDir="column" gap="30px">
        <Heading
          as="h1"
          fontSize={{ base: '36px', lg: '52px', xl: '74px'}}
          lineHeight="120%"
          fontWeight={700}
          maxW="1036px"
          bg="linear-gradient(180deg, rgba(10, 10, 57, 0.414) -16.61%, rgba(255, 255, 255, 0.31875) 48.53%, rgba(13, 15, 42, 0.426) 106.01%), #FFFFFF;"
          bgClip="text"
        >
          Constellation of decentralized products and services
        </Heading>
        <Text
          fontSize={{ base: '16px', lg: '20px'}}
          lineHeight="130%"
          fontWeight={400}
          opacity={0.8}
        >
          Log in and get information, access and other first user benefit
        </Text>
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
              Wait LIST
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
    </Container>
  );
};

export default FirstSection;
