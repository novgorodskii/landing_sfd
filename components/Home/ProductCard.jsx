import Image from "next/image"
import { Flex, Heading, Text, Button } from "@chakra-ui/react"
import { useRouter } from "next/router";

const ProductCard = ({ image, title, description, link }) => {
  const router = useRouter();
  
  return (
    <Flex
      w="328px"
      flexDir="column"
      p="50px"
      gap="30px"
      bg="linear-gradient(111.49deg, rgba(174, 192, 255, 0.28) -8.95%, rgba(255, 255, 255, 0.007) 114%)"
      border="2px solid #3e3e3e"
      blur="50px"
      borderRadius="25px"
      zIndex={1}
    >
      <Image
        width={70}
        height={70}
        src={image}
        alt="title"
      />
      <Flex flexDir="column" gap="12px">
        <Heading
          as="h3"
          fontSize="32px"
          lineHeight="120%"
          fontWeight={700}
          color="#fff"
        >
          {title}
        </Heading>
        <Text
          fontSize="18px"
          lineHeight="130%"
          fontWeight={400}
          color="#fff"
          opacity={0.8}
        >
          {description}
        </Text>
      </Flex>
      <Button
        w="100%"
        h="max-content"
        bg="#fff"
        py="18px"
        borderRadius="500px"
        _hover={{ opacity: 0.8 }}
        onClick={() => router.push(`product/${title.toLowerCase()}`)}
      >
        <Flex gap="8px" color="#090D0D" alignItems="center">
          <Text
            fontSize="16px"
            lineHeight="19px"
            fontWeight={700}
          >
            Learn more
          </Text>
          <Image
            src="/images/arrow-right.svg"
            width={18}
            height={18}
            alt="arrow-right"
          />
        </Flex>
      </Button>
    </Flex>
  );
};

export default ProductCard;
