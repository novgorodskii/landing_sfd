import ProductCard from "./Home/ProductCard";
import { Container, Grid, GridItem } from "@chakra-ui/react";

const ProductSection = ({ products }) => {
  return (
    <Container maxW="1150px" p={0}>
      <Grid
        templateColumns="repeat(3, minmax(326px, 1fr))"
        gap={4}
        overflowX="auto"
        py={4}
        mx={{ base: "-16px", md: "-32px", xl: "-64px" }}
        px={{ base: "16px", md: "32px", xl: "64px" }}
        css={{
          scrollSnapType: "x mandatory", // Enable horizontal snap scrolling
        }}
      >
        {products.map((product) => (
          <GridItem display="flex"
            key={product.id}>
            <ProductCard
              width={"326px"}
              id={product.id}
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              link={product.link}
            />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductSection;
