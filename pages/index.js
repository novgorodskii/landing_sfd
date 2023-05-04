import Layout from "../components/Layout";
import FirstSection from "../components/Home/FirstSection";
import ProductSection from "../components/ProductsSection";
import AboutSection from "../components/Home/AboutSection/AboutSection";
import RunningLineSection from "../components/Home/RunningLineSection/RunningLineSection";
import ContactUsSection from "../components/Home/ContactUsSection";
import { PRODUCTS_CARDS, RUNNING_BLOCKS } from "../constants/shared";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Layout bgImg="/images/main-bg.png">
      <Box id="hero" paddingY={[30, 40, 60]}>
        <FirstSection />
      </Box>

      <Box id="projects">
        <ProductSection products={PRODUCTS_CARDS} />
      </Box>

      <Box id="about-us" paddingTop={[30, 40, 60]}>
        <AboutSection />
      </Box>

      <Box id="technology" paddingTop={[30, 40, 60]}>
        <RunningLineSection data={RUNNING_BLOCKS} />
      </Box>

      <Box id="contact-us" paddingTop={[30, 40, 60]}>
        <ContactUsSection />
      </Box>
    </Layout>
  );
};

export default Home;
