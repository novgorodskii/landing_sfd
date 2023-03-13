'use client'
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import MainSection from "../../components/Product/MainSection";
import OtherProductsSection from "../../components/Product/OtherProductsSection";
import ProductAboutSection from "../../components/Product/ProductAboutSection/ProductAboutSection";
import SliderSection from "../../components/Product/SliderSection";
import { PRODUCTS_CARDS, PRODUCT_ITEMS } from "../../constants/shared";

const Product = ({ params }) => {
  const { productName } = params;
  const [product, setProduct] = useState();
  const [otherProducts, setOtherProducts] = useState();

  useEffect(() => {
      const filteredProduct = PRODUCT_ITEMS.filter((item) => item?.title?.toLowerCase() === productName?.toLowerCase())[0];
      setProduct(filteredProduct);
      const filteredOtherProducts = PRODUCTS_CARDS.filter((item) => item?.title?.toLowerCase() !== productName?.toLowerCase());
      setOtherProducts(filteredOtherProducts);
  }, [productName])

  return (
    <Layout isCenteredBg bgImg="/images/productItems/product-layout.png">
      {product ? (
        <>
          <MainSection
            title={product?.title}
            subtitle={product?.subtitle}
            image={product?.mainImg}
            liveDemoLink={product?.liveDemoLink}
            sourceCodeLink={product?.sourceCodeLink}
          />
          <SliderSection items={product?.sliderItems} />
          <ProductAboutSection
            descriptionArr={product?.description}
            aboutArr={product?.about}
            howItsMadeArr={product?.howItsMade}
          />
          <OtherProductsSection products={otherProducts} />
        </>
      ) : null}
    </Layout>
  );
};

export function getServerSideProps(context) {
  return {
    props: {params: context.params}
  };
}

export default Product;
