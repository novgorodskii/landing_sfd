import { Box, Flex } from "@chakra-ui/react";
import RunningItem from "./RunningItem";
import Marquee from "react-fast-marquee";

const RunningLine = ({ data, direction, speed }) => {
  return (
    <Box overflow="hidden" position="relative">
      <Marquee speed={speed} direction={direction} gradient={false} loop={0}>
        <Flex gap="16px" position="relative" overflow="hidden" w="max-content">
          {data?.map((block) => (
            <RunningItem key={block.id} image={block.img} title={block.title} />
          ))}
        </Flex>
      </Marquee>
    </Box>
  );
};

export default RunningLine;
