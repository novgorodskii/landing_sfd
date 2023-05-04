import { Container, Flex, Image } from "@chakra-ui/react";

const SliderSection = ({ items }) => {
  return (
    <Container maxW="1150px" p={0}>
      <Flex
        py={10}
        pos="relative"
        justify="flex-start"
        gap={{ base: "20px", md: "30px", lg: "40px" }}
        overflowX="scroll"
        mx={{ base: "calc((100vw - 100%) / 2 * -1)" }}
        px={{ base: "calc((100vw - 100%) / 2 * 1)" }}
        css={{
          scrollSnapType: "x mandatory", // Enable horizontal snap scrolling
        }}
      >
        {items.map((item) => (
          <Image
            key={item.id}
            src={item.src}
            height={{ base: "300px", md: "400px" }}
            css={{
              width: "auto",
              pointerEvents: "none",
              objectFit: "contain",
              border: "1px solid #B8B8B9",
              borderRadius: "8px",
            }}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default SliderSection;
