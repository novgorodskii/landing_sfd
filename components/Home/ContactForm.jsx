import { chakra, Flex, Input, Textarea, Button, Box } from "@chakra-ui/react"
import { useState } from "react"

const CustomInput = chakra(Input, {
  baseStyle: {
    h: 'max-content',
    color: '#fff',
    border: '1px solid #fff',
    padding: '16px',
    borderRadius: '9px',
    fontSize: '16px',
    lineHeight: '140%',
    fontWeight: 400,
    _placeholder: {
      color: "#fff",
      opacity: 0.8,
    }
  }
})

const ContactForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Flex
      w={{ base: '100%', md: '564px'}}
      p={{ base: '30px 30px 40px 30px', lg: '40px 30px 54px 30px'}}
      flexDir="column"
      gap="16px"
      bg="linear-gradient(111.49deg, rgba(174, 192, 255, 0.28) -8.95%, rgba(255, 255, 255, 0.007) 114%)"
      blur="50px"
      border="2px solid #3e3e3e"
      borderRadius="25px"
      zIndex={1}
    >
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        gap={{ base: '16px', md: 0 }}
        justify="space-between"
      >
        <CustomInput
          w={{ base: '100%', md: '48%' }}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="First Name"
        />
        <CustomInput
          w={{ base: '100%', md: '48%'}}
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
          placeholder="Last Name"
        />
      </Flex>
      <Box>
        <CustomInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
      </Box>
      <Box>
        <Textarea
          h={{ base: '120px', xl: 'max-content'}}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="How we can help?"
          resize="none"
          p="16px"
          borderRadius="9px"
          border="1px solid #fff"
          color="#fff"
          _placeholder={{
            color: '#fff',
            opacity: 0.8
          }}
        />
      </Box>
      <Button
        h="max-content"
        w={{ base: '100%', xl: 'max-content'}}
        p="18px 40px"
        borderRadius="500px"
        bg="#fff"
        color="#090D0D"
        fontSize="16px"
        lineHeight="19px"
        fontWeight={700}
        _hover={{ opacity: 0.8 }}
        isDisabled={!name || !surname || !email}
      >
        Contact
      </Button>
    </Flex>
  );
};

export default ContactForm;
