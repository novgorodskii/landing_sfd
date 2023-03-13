import { Container, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react"
import AboutBlock from "./AboutBlock";

const ProductAboutSection = ({ descriptionArr, aboutArr, howItsMadeArr }) => {
  const [isInColumn] = useMediaQuery('(max-width: 1399px)');
  return (
    <Container maxW="80%" mt="120px" p={0}>
      <Flex flexDir="column" gap={isInColumn ? '80px' : '70px'}>
        <Flex
          flexDir={{ base: 'column-reverse', xl: 'row' }}
          justify="space-between"
          gap={isInColumn ? '80px' : 0}
        >
          <Flex
            flexDir="column"
            gap={{ base: '24px', xl: '30px' }}
            w={isInColumn ? '100%' : '670px'}
          >
            <Heading
              as="h2"
              fontSize={{ base: '28px', lg: '36px', xl: '42px' }}
              lineHeight="120%"
              fontWeight={700}
              bg="linear-gradient(180deg, rgba(10, 10, 57, 0.414) -16.61%, rgba(255, 255, 255, 0.31875) 48.53%, rgba(13, 15, 42, 0.426) 106.01%), #FFFFFF"
              bgClip="text"
            >
              Project Description
            </Heading>
            <Flex flexDir="column" gap="20px">
              {descriptionArr && descriptionArr.map((desc) => (
                <Text
                  key={desc.id}
                  fontSize={{ base: '16px', xl: '18px'}}
                  lineHeight="130%"
                  fontWeight={400}
                  color="#fff"
                  opacity={0.8}
                >
                  {desc.text}
                </Text>
              ))}
            </Flex>
          </Flex>
          <AboutBlock aboutArr={aboutArr} />
        </Flex>
        <Flex flexDir="column" gap={{ base: '24px', xl: '30px' }} w={isInColumn ? '100%' : '670px'}>
          <Heading
            as="h2"
            fontSize={{ base: '28px', lg: '36px', xl: '42px' }}
            lineHeight="120%"
            fontWeight={700}
            bg="linear-gradient(180deg, rgba(10, 10, 57, 0.414) -16.61%, rgba(255, 255, 255, 0.31875) 48.53%, rgba(13, 15, 42, 0.426) 106.01%), #FFFFFF"
            bgClip="text"
          >
            How it&apos;s made
          </Heading>
          <Flex flexDir="column" gap="20px">
            {howItsMadeArr && howItsMadeArr.map((item) => (
              <Text
                key={item.id}
                fontSize={{ base: '16px', xl: '18px' }}
                lineHeight="130%"
                fontWeight={400}
                color="#fff"
                opacity={0.8}
              >
                {item.text}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProductAboutSection;
