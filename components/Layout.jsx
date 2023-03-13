import { Flex, Box, useMediaQuery } from "@chakra-ui/react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ bgImg, isCenteredBg, children }) => {
  const [notDesktop] = useMediaQuery('(max-width: 767px)');
  return (
    <Flex
      position="relative"
      flexDir="column"
      bg="#050506"
      px={{ base: '16px', md: '32px', xl: '64px'}}
      minH="100vh"
      zIndex={1}
      overflow="hidden"
    >
      <Header />
      <Box
        w="100%"
        h="100%"
        position="absolute"
        bgImg={bgImg}
        bgRepeat="no-repeat"
        bgSize={notDesktop && '90%'}
        bgPos={isCenteredBg ? "center top" : "right top"}
        right={0}
        zIndex={-1}
      />
      <Box as="main" flex="1 0 auto">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
