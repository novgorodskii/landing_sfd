import { Flex, Heading, Container, Text, Box, useMediaQuery } from "@chakra-ui/react"
import Image from "next/image"

const SolutionsSection = () => {
  const [isInRow] = useMediaQuery('(min-width: 1280px)');
  const [isSmallSize] = useMediaQuery('(max-width: 450px)');
  return (
    <Container maxW="1150px" mt="120px">
      <Flex
        flexDir="column"
        alignItems="center"
        gap="60px"
      >
        <Heading
          as="h2"
          fontSize={{base: '36px', xl: '56px'}}
          lineHeight="120%"
          fontWeight={700}
          bg="linear-gradient(180deg, rgba(10, 10, 57, 0.414) -16.61%, rgba(255, 255, 255, 0.31875) 48.53%, rgba(13, 15, 42, 0.426) 106.01%), #FFFFFF;"
          bgClip="text"
        >
          Solutions
        </Heading>
        <Flex
          flexDir={{ base: 'column-reverse', lg: 'row' }}
          justify="space-between"
          position="relative"
        >
          <Flex
            mt={!isInRow ? '30px' : 0}
            position="relative"
            flexDir="column"
            gap="32px"
            w={{base: '100%', md: '41%'}}
            alignSelf="center"
          >
            <Heading
              as="h3"
              fontSize={{base: '28px', xl: '42px'}}
              lineHeight="120%"
              fontWeight={700}
            >
              Cryptocurrency: The Future of Money?
            </Heading>
            <Text
            fontSize={{base: '16px', xl: '24px'}}
            lineHeight="140%"
            fontWeight={400}
            color="#fff"
            opacity={0.8}
            >
              Cryptocurrency is a digital or virtual currency that is secured by cryptography, making it nearly impossible to counterfeit or double-spend. Cryptocurrency is decentralized, meaning it is not controlled by any government or central bank. It is created and stored electronically in the blockchain, a distributed public ledger. Cryptocurrency is used as a medium of exchange, and its value is determined by the market.
            </Text>
          </Flex>
            <Box
              w={!isInRow ? 262 : 500}
              h={!isInRow ? 341 : 650}
              pos="relative"
              alignSelf={!isInRow ? 'center' : 'flex-start'}
              bg="linear-gradient(111.49deg, rgba(174, 192, 255, 0.28) -8.95%, rgba(255, 255, 255, 0.007) 114%)"
              backdropFilter="blur(50px)"
              borderRadius="25px"
              border="2px solid #31343A"
            >
              <Image
                style={{ position: 'absolute', top: '14%', left: isSmallSize ? '-7%' : '-14%', maxWidth: isSmallSize ? '115%' : '100%' }}
                src="/images/discord-screen.png"
                width={!isInRow ? 302 : 496}
                height={!isInRow ? 259 : 425}
                alt="discord-screen"
              />
            </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default SolutionsSection;
