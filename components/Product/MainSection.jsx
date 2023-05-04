import {
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";

const MainSection = ({ title, subtitle, logo, image, links }) => {
  const [isDesktop] = useMediaQuery("(min-width: 1130px)");
  return (
    <Container
      maxW="1150px"
      mt={{ base: "84px", xl: "100px" }}
      p={0}
      mb={isDesktop ? "120px" : 0}
    >
      <Flex
        flexDir={{ base: "column", xl: "row" }}
        gap={{ base: "50px", xl: 0 }}
        justify="space-between"
        h="max-content"
      >
        <Flex flexDir="column" gap="16px" w={{ base: "100%", xl: "590px" }}>
          {logo && (
            <Box marginBottom={10}>
              <Image
                src={logo.src}
                alt="logo"
                width={150}
                height={70}
                style={{ objectFit: "contain", width: "auto", height: 70 }}
              />
            </Box>
          )}

          <Heading
            as="h1"
            fontSize={{ base: "36px", lg: "52px", xl: "74px" }}
            lineHeight="120%"
            fontWeight={700}
            bg="linear-gradient(180deg, rgba(10, 10, 57, 0.414) -16.61%, rgba(255, 255, 255, 0.31875) 48.53%, rgba(13, 15, 42, 0.426) 106.01%), #FFFFFF"
            bgClip="text"
          >
            {title}
          </Heading>
          <Text
            fontSize={{ base: "18px", lg: "26px", xl: "32px" }}
            lineHeight="120%"
            fontWeight={700}
            color="#fff"
            maxWidth="800px"
          >
            {subtitle}
          </Text>
          {links && (
            <Flex wrap={"wrap"} gap="20px" mt="14px">
              {links?.app && (
                <Button
                  as="a"
                  target="_blank"
                  h="max-content"
                  w="max-content"
                  p="18px 40px"
                  bg="#fff"
                  borderRadius="500px"
                  color="#090D0D"
                  _hover={{ opacity: 0.8 }}
                  href={links?.app}
                >
                  <Flex gap="8px" alignItems="center">
                    <Text>Launch Test App</Text>
                    <Image
                      src="/images/arrow-right.svg"
                      alt="arrow"
                      width={12}
                      height={12}
                    />
                  </Flex>
                </Button>
              )}

              {links?.website && (
                <Button
                  as="a"
                  target="_blank"
                  h="max-content"
                  w="max-content"
                  p="18px 40px"
                  bg="transparent"
                  border="1px solid #fff"
                  borderRadius="500px"
                  color="#fff"
                  href={links?.website}
                >
                  <Flex gap="8px" alignItems="center">
                    <Text>Website</Text>
                    <Image
                      src="/images/arrow-right-white.svg"
                      alt="arrow"
                      width={18}
                      height={18}
                      bg="#fff"
                    />
                  </Flex>
                </Button>
              )}
              {links?.docs && (
                <Button
                  as="a"
                  target="_blank"
                  h="max-content"
                  w="max-content"
                  p="18px 40px"
                  bg="transparent"
                  border="1px solid #fff"
                  borderRadius="500px"
                  color="#fff"
                  href={links?.docs}
                >
                  <Flex gap="8px" alignItems="center">
                    <Text>Docs</Text>
                    <Image
                      src="/images/arrow-right-white.svg"
                      alt="arrow"
                      width={18}
                      height={18}
                      bg="#fff"
                    />
                  </Flex>
                </Button>
              )}
            </Flex>
          )}
        </Flex>
        {image && (
          <Flex
            alignItems="center"
            justifyContent="center"
            position="relative"
            marginBottom={6}
          >
            <Box
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w={
                image?.orientation === "portrait"
                  ? { base: 343, xl: 500 }
                  : { base: 243, xl: 368 }
              }
              h={
                image?.orientation === "portrait"
                  ? { base: 252, xl: 370 }
                  : { base: 370, xl: 552 }
              }
              bg="linear-gradient(111.49deg, rgba(174, 192, 255, 0.28) -8.95%, rgba(255, 255, 255, 0.007) 114%)"
              blur="50px"
              borderRadius="25px"
              border="2px solid #3e3e3e"
              zIndex={-1}
            />

            <Image
              src={image.src}
              height={isDesktop ? 552 : 378}
              width={isDesktop ? 370 : 252}
              style={{
                width: "auto",
                backgroundColor: "#000",
                border: "1px solid #B8B8B9",
                borderRadius: "8px",
                objectFit: "contain",
                height: image?.orientation === "portrait" ? 552 : 300,
              }}
            />
          </Flex>
        )}
      </Flex>
    </Container>
  );
};

export default MainSection;
