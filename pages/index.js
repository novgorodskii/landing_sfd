import { useRouter } from "next/router";
import Layout from "../components/Layout";
import FirstSection from "../components/Home/FirstSection";
import ProductSection from "../components/ProductsSection";
import AboutSection from "../components/Home/AboutSection/AboutSection";
import RunningLineSection from "../components/Home/RunningLineSection/RunningLineSection";
import SolutionsSection from "../components/Home/SolutionsSection";
import ContactUsSection from "../components/Home/ContactUsSection";
import { PRODUCTS_CARDS } from "../constants/shared";

const Home = () => {
  const { push } = useRouter()
  let goApp = () => push(`${process?.env?.NEXT_PUBLIC_LINK_APP}`);
  return (
  <Layout bgImg="/images/main-bg.png">
    <FirstSection />
    <ProductSection products={PRODUCTS_CARDS} />
    <AboutSection />
    <RunningLineSection />
    <SolutionsSection />
    <ContactUsSection />
  </Layout>
  )
}

export default Home
