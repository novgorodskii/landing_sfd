import { Flex, Text, Box } from "@chakra-ui/react"

const AboutBlockItem = ({ title, value }) => {
  return (
    <Flex flexDir="column" gap="12px">
      <Text
        fontSize="16px"
        lineHeight="140%"
        fontWeight={400}
        color="#fff"
        opacity={0.8}
      >
        {title}
      </Text>
      <Box
        w="max-content"
        bg="linear-gradient(101.28deg, #85C0FF -36.78%, #9994FF 52.74%, #897EFF 158.53%), linear-gradient(98.67deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 125.58%);"
        borderRadius="100px"
      >
        <Box
          m="1px"
          p="16px 24px"
          bg="#22252D"
          border
          borderRadius="100px"
        >
          <Text
            bg="linear-gradient(101.28deg, #6DB0F8 -36.78%, #7872FF 52.74%, #3626F0 158.53%)"
            bgClip="text"
          >
            {value}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default AboutBlockItem;
