import { Box, Flex } from "@chakra-ui/react";
import RunningItem from "./RunningItem";
import Marquee from "react-fast-marquee";

function multiplyArray(array, multiplier) {
  return array.concat(...Array(multiplier - 1).fill(array));
}

const RunningLine = ({ data, direction, speed }) => {
  return (
    <Box overflow="hidden" position="relative">
      <Marquee speed={speed} direction={direction} gradient={false} loop={0}>
        <Flex gap="16px" position="relative" overflow="hidden" w="max-content">
          {multiplyArray(data, 3)?.map((block, index) => (
            <RunningItem
              key={`${block.id}-${index}`}
              image={block.img}
              title={block.title}
            />
          ))}
        </Flex>
      </Marquee>
    </Box>
  );
};

export default RunningLine;
