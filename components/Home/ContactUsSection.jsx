import { Container, Flex, Heading, Box } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const ContactUsSection = () => {
  return (
    <Box position="relative">
      <Container maxW="1150px" p={0} pos="relative">
        <Flex
          flexDir="column"
          gap="40px"
          w={{ base: "100%", xl: "max-content" }}
          alignItems={{ base: "center", xl: "flex-start" }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "36px", lg: "46px", xl: "56px" }}
            textAlign={{ base: "center", xl: "start" }}
            lineHeight="120%"
            fontWeight={700}
          >
            Contact Us
          </Heading>
          <ContactForm />
        </Flex>
      </Container>
      <Box
        w="100%"
        h="300%"
        position="absolute"
        top="-102%"
        left="-23%"
        bottom={0}
        bgImg="/images/contact-bg-1.png"
        bgRepeat="no-repeat"
        bgSize="contain"
        zIndex={-1}
      />
      <Box
        w="100%"
        h="225%"
        position="absolute"
        top="-66%"
        left="23%"
        bgImg="/images/contact-bg-2.png"
        bgRepeat="no-repeat"
        bgPosition="right"
        bgSize="contain"
        zIndex={-1}
      />
    </Box>
  );
};

export default ContactUsSection;
