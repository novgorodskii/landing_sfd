import { Flex, Heading, Container, Box } from "@chakra-ui/react"
import AboutTabs from "./AboutTabs";

const AboutSection = () => {
  return (
    <Flex
      position="relative"
      flexDir="column"
      mt="120px"
      justifyContent="center"
    >
      <Box
        w={{ base: "120%", md: "100%"}}
        h="100%"
        position="absolute"
        top={0}
        left={{ base: '-6%', xl: '-10%'}}
        bgImg="/images/about-bg.png"
        bgRepeat="no-repeat"
        zIndex={-1}
      />
      <Container maxW="1150px" p={0}>
        <Heading
          as="h2"
          fontSize={{base: '36px', xl: '56px'}}
          textAlign={{base: 'center', xl: 'start'}}
          lineHeight="120%"
          fontWeight={700}
          bg="linear-gradient(180deg, rgba(10, 10, 57, 0.414) -16.61%, rgba(255, 255, 255, 0.31875) 48.53%, rgba(13, 15, 42, 0.426) 106.01%), #FFFFFF;"
          bgClip="text"
        >
          GoDeFX is all-in-one solutions for crypto
        </Heading>
        <AboutTabs />
      </Container>
    </Flex>
  );
};

export default AboutSection;
