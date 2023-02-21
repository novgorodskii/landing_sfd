import { Box } from "@chakra-ui/layout";

export default function Main({ children, ...props }) {
  return (
    <Box flexGrow={1} my={[2, 8]} {...props}>
      {children}
    </Box>
  );
}
