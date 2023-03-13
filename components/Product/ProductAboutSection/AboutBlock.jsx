import { Flex, Heading, useMediaQuery } from "@chakra-ui/react"
import AboutBlockItem from "./AboutBlockItem";

const AboutBlock = ({ aboutArr }) => {
  const [isInColumn] = useMediaQuery('(max-width: 1399px');

  return (
    <Flex
      flexDir="column"
      gap="24px"
      h={isInColumn ? 'max-content' : '100%'}
      w={{ base: '100%', xl: '328px' }}
      alignItems={{ base: 'center', xl: 'flex-start'}}
      p="30px 30px 65px 30px"
      bg="linear-gradient(111.49deg, rgba(174, 192, 255, 0.28) -8.95%, rgba(255, 255, 255, 0.007) 114%)"
      blur="50px"
      borderRadius="25px"
      border="2px solid #3e3e3e"
    >
      <Heading
        as="h2"
        fontSize="42px"
        lineHeight="120%"
        fontWeight={700}
        color="#fff"
      >
        About
      </Heading>
      <Flex flexDir="column" gap="36px">
        {aboutArr && aboutArr.map((aboutItem) => (
          <AboutBlockItem
            key={aboutItem?.id}
            title={aboutItem?.title}
            value={aboutItem?.value}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default AboutBlock;
