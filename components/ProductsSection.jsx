import ProductCard from "./Home/ProductCard";
import { Grid, useMediaQuery, Flex, Box } from "@chakra-ui/react"

const ProductSection = ({ products }) => {
  const [isMobileCards] = useMediaQuery('(max-width: 769px)');
  const [isCenteredSlide] = useMediaQuery('(max-width: 400px)');
  return (
    !isMobileCards ? (
      <Grid
        mt="220px"
        gridTemplateColumns="repeat(auto-fill, 328px)"
        justifyContent="center"
        gridGap="30px"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            link={product.link}
          />
        ))}
      </Grid>
    ) : (
      <Flex
        justify="flex-start"
        gap="10px"
        h="max-content"
        minW="328px"
        mt="90px"
        ml={!isCenteredSlide ? '16px' : 0}
        mr={{ base: '-16px', md: '-32px' }}
        overflowX="scroll"
      >
        <Flex gap="10px">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              link={product.link}
            />
          ))}
        </Flex>
      </Flex>
    )
  );
};

export default ProductSection;
