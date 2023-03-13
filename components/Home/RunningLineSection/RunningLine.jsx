import { Box, Flex } from "@chakra-ui/react"
import RunningItem from "./RunningItem";
import Marquee from "react-fast-marquee";
import { RUNNING_BLOCKS } from "../../../constants/shared";

const RunningLine = ({ direction, speed }) => {
  return (
    <Box overflow="hidden" position="relative">
      <Marquee speed={speed} direction={direction} gradient={false} loop={0}>
        <Flex gap="16px" position="relative" overflow="hidden" w="max-content">
          {RUNNING_BLOCKS.map((block) => (
            <RunningItem
              key={block.id}
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
