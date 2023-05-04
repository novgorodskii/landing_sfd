"use client";
import { Box, Container, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import RunningLineSection from "../../components/Home/RunningLineSection/RunningLineSection";
import Layout from "../../components/Layout";
import MainSection from "../../components/Product/MainSection";
import OtherProductsSection from "../../components/Product/OtherProductsSection";
import AboutBlock from "../../components/Product/ProductAboutSection/AboutBlock";
import ProductAboutSection from "../../components/Product/ProductAboutSection/ProductAboutSection";
import SliderSection from "../../components/Product/SliderSection";
import {
  PRODUCTS_CARDS,
  PRODUCT_ITEMS,
  RUNNING_BLOCKS,
} from "../../constants/shared";

const Product = ({ params }) => {
  const { productName } = params;
  const [product, setProduct] = useState();
  const [otherProducts, setOtherProducts] = useState();

  useEffect(() => {
    const filteredProduct = PRODUCT_ITEMS.filter(
      (item) => String(item?.id) === String(productName)
    )[0];
    setProduct(filteredProduct);
    const filteredOtherProducts = PRODUCTS_CARDS.filter(
      (item) => String(item?.id) !== String(productName)
    );
    setOtherProducts(filteredOtherProducts);
  }, [productName]);

  return (
    <Layout isCenteredBg bgImg="/images/productItems/product-layout.png">
      {product ? (
        <>
          <MainSection
            title={product?.title}
            subtitle={product?.subtitle}
            image={product?.posterMain}
            links={product?.links}
            logo={product?.logo}
          />
          <SliderSection items={product?.posterItems} />
          <Box paddingTop={[30, 40, 60]}>
            <Container maxW="1150px">
              <Flex
                alignItems="flex-start"
                flexDir={["column", "column", "column", "column", "row"]}
                gap={20}
              >
                <Box flexGrow={1}>
                  <Box
                    maxW="700px"
                    fontSize={["16px", "18px"]}
                    sx={{
                      h2: {
                        fontSize: "42px",
                        fontWeight: "bold",
                        marginBottom: "2rem",
                      },
                      p: {
                        marginBottom: "2rem",
                      },
                      ol: {
                        marginBottom: "2rem",
                        paddingLeft: "1.5rem",
                      },
                      ul: {
                        marginBottom: "2rem",
                        paddingLeft: "1.5rem",
                      },
                      "ul > li > ul": {
                        marginBottom: "0",
                      },
                      "ul > li > ol": {
                        marginBottom: "0",
                      },
                      "ol > li > ol": {
                        marginBottom: "0",
                      },
                      "ol > li > ul": {
                        marginBottom: "0",
                      },
                      "* + h2": {
                        marginTop: "4rem",
                      },
                    }}
                    dangerouslySetInnerHTML={{ __html: product.content }}
                  />
                </Box>
                <Box
                  order={{ base: "-1", lg: "1" }}
                  width={{ base: "100%", lg: "auto" }}
                  flexShrink={0}
                  minW={{ base: "100%", md: "328px" }}
                >
                  <AboutBlock aboutArr={product?.about} />
                </Box>
              </Flex>
            </Container>
          </Box>
          <Box paddingTop={[30, 40, 60]}>
            <RunningLineSection
              data={RUNNING_BLOCKS.filter((block) =>
                product?.technologies?.includes(block.id)
              )}
            />
          </Box>
        </>
      ) : null}
    </Layout>
  );
};

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}

export default Product;
