import { Flex, Box } from "@chakra-ui/react";
import RunningLine from "./RunningLine";

const RunningLineSection = ({ data }) => {
  return (
    <Box pos="relative" mx="-64px">
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
        <RunningLine data={data} direction="left" speed={50} />
        <RunningLine data={data} direction="right" speed={25} />
        <RunningLine data={data} direction="left" speed={75} />
      </Flex>
    </Box>
  );
};

export default RunningLineSection;
