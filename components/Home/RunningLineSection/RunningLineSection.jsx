import { Flex, Box } from "@chakra-ui/react"
import RunningLine from "./RunningLine";

const RunningLineSection = () => {
  return (
   <Box
    pos="relative"
    mx="-64px"
    mb={{ base: '80px', xl: '120px' }}
    mt="120px"
  >
    <Box
      h="100%"
      width="157px"
      pos="absolute"
      top={0}
      left={0}
      bg="linear-gradient(269.2deg, rgba(1, 5, 13, 0) -3.36%, #01050D 73.31%)"
      zIndex={2}
    />
    <Box
       h="100%"
       width="157px"
       pos="absolute"
       top={0}
       right={0}
       bg="linear-gradient(269.2deg, rgba(1, 5, 13, 0) -3.36%, #01050D 73.31%)"
       transform="matrix(-1, 0, 0, 1, 0, 0)"
       zIndex={2}
    />
    <Flex flexDir="column" justify="center" gap="20px" pos="relative">
      <RunningLine direction="left" speed={100} />
      <RunningLine direction="right" speed={50} />
      <RunningLine direction="left" speed={150} />
    </Flex>
   </Box>
  );
};

export default RunningLineSection;
