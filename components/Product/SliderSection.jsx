import { Container, Flex, Image, useMediaQuery } from "@chakra-ui/react"

const SliderSection = ({ items }) => {
  const [notDesktop] = useMediaQuery('(max-width: 1129px)');
  return (
    <Container maxW={{ base: '100%', xl: '80%' }} mt="160px" p={0}>
      <Flex
        mt="40px"
        pos="relative"
        mr={notDesktop ? 0 : '-25%'}
        justify="flex-start"
        gap="40px"
        overflowX="scroll"
      >
        {items.map((item) => (
          <Image key={item.id} src={item.src} alt="slider-item" />
        ))}
      </Flex>
    </Container>
  );
};

export default SliderSection;
