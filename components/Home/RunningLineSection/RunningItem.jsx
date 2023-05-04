import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const RunningItem = ({ title, image }) => {
  return (
    <Flex
      p="18px"
      bg="linear-gradient(111.49deg, rgba(174, 192, 255, 0.28) -8.95%, rgba(255, 255, 255, 0.007) 114%)"
      borderRadius="10px"
      gap="14px"
      w="max-content"
      alignItems="center"
      _last={{ mr: "16px" }}
      filter="grayscale(100%)"
      _hover={{
        filter: "grayscale(0%)",
      }}
    >
      {image && <Image src={image} width={30} height={30} alt={title} />}
      <Text
        fontSize="20px"
        lineHeight="24px"
        fontWeight={400}
        color="#fff"
        opacity={0.8}
      >
        {title}
      </Text>
    </Flex>
  );
};

export default RunningItem;
