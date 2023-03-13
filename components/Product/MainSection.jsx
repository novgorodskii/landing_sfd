import { Container, Flex, Heading, Text, Button, Box, useMediaQuery } from "@chakra-ui/react"
import Image from "next/image"

const MainSection = ({ title, subtitle, image, liveDemoLink, sourceCodeLink }) => {
  const [isDesktop] = useMediaQuery('(min-width: 1130px)');
  return (
    <Container
      maxW="80%"
      mt={{ base: '84px', xl: '100px' }}
      p={0}
      mb={isDesktop ? '240px' : 0}
    >
      <Flex
        flexDir={{ base: 'column', xl: 'row' }}
        gap={{ base: '50px', xl: 0 }}
        justify="space-between"
        h="max-content"
      >
        <Flex flexDir="column" gap="16px" w={{ base: '100%', xl: '590px' }}>
          <Heading
            as="h1"
            fontSize={{ base: '36px', lg: '52px', xl: '74px' }}
            lineHeight="120%"
            fontWeight={700}
            bg="linear-gradient(180deg, rgba(10, 10, 57, 0.414) -16.61%, rgba(255, 255, 255, 0.31875) 48.53%, rgba(13, 15, 42, 0.426) 106.01%), #FFFFFF"
            bgClip="text"
          >
            {title}
          </Heading>
          <Text
            fontSize={{ base: '18px', lg: '26px', xl: '32px'}}
            lineHeight="120%"
            fontWeight={700}
            color="#fff"
          >
            {subtitle}
          </Text>
          <Flex display={{ base: 'none', xl: 'flex' }} gap="20px" mt="14px">
            <Button
              h="max-content"
              w="max-content"
              p="18px 40px"
              bg="#fff"
              borderRadius="500px"
              color="#090D0D"
              _hover={{ opacity: 0.8 }}
              onClick={() => window.open(liveDemoLink)}
            >
              <Flex gap="8px" alignItems="center">
                <Text>Live Demo</Text>
                <Image
                  src="/images/arrow-right.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                />
              </Flex>
            </Button>
            <Button
              h="max-content"
              w="max-content"
              p="18px 40px"
              bg="transparent"
              border="1px solid #fff"
              borderRadius="500px"
              color="#fff"
              onClick={() => window.open(sourceCodeLink)}
            >
              <Flex gap="8px" alignItems="center">
                <Text>Source Code</Text>
                <Image
                  src="/images/arrow-right-white.svg"
                  alt="arrow"
                  width={18}
                  height={18}
                  bg="#fff"
                />
              </Flex>
            </Button>
          </Flex>
        </Flex>
        <Flex
          mt={{ base: '80px', xl: 0}}
          pos="relative"
          alignSelf={{ base: 'center', xl: 'normal' }}
          w={{ base: 343, xl: 500 }}
          h={{ base: 252, xl: 370 }}
          bg="linear-gradient(111.49deg, rgba(174, 192, 255, 0.28) -8.95%, rgba(255, 255, 255, 0.007) 114%)"
          blur="50px"
          borderRadius="25px"
          border="2px solid #3e3e3e"
        >
          {image ? (
            <Image
              style={{ position: 'absolute', top: '-22%', left: isDesktop ? '8%' : '12%'}}
              src={image}
              alt="main"
              height={isDesktop ? 552 : 378}
              width={isDesktop ? 370 : 252}
            />
          ) : null}
        </Flex>
        <Flex
          display={{ base: 'flex', xl: 'none' }}
          flexDir="column"
          alignItems="center"
          gap="20px"
          mt="74px"
        >
            <Button
              h="max-content"
              w="max-content"
              p="18px 40px"
              bg="#fff"
              borderRadius="500px"
              color="#090D0D"
              _hover={{ opacity: 0.8 }}
              onClick={() => window.open(liveDemoLink)}
            >
              <Flex gap="8px" alignItems="center">
                <Text>Live Demo</Text>
                <Image
                  src="/images/arrow-right.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                />
              </Flex>
            </Button>
            <Button
              h="max-content"
              w="max-content"
              p="18px 40px"
              bg="transparent"
              border="1px solid #fff"
              borderRadius="500px"
              color="#fff"
              onClick={() => window.open(sourceCodeLink)}
            >
              <Flex gap="8px" alignItems="center">
                <Text>Source Code</Text>
                <Image
                  src="/images/arrow-right-white.svg"
                  alt="arrow"
                  width={18}
                  height={18}
                  bg="#fff"
                />
              </Flex>
            </Button>
          </Flex>
      </Flex>
    </Container>
  );
};

export default MainSection;
