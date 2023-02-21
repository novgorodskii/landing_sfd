import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Menu as ChakraMenu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const Menu = ({ active, setActive, coinsList }) => {
  return (
    <ChakraMenu offset={[0, 0]} isLazy matchWidth>
      <MenuButton w="200px" px="14px" py="12px" bg="#2F353C" borderRadius="md">
        <Flex justify="space-between" alignItems="center">
          <HStack spacing="8px">
            <Image
              src={`/icons/iconsCurrency/${active?.title}.svg`}
              width={24}
              height={24}
              alt={active?.title}
            />
            <Text>{active?.title}</Text>
          </HStack>
          <ChevronDownIcon boxSize="24px" />
        </Flex>
      </MenuButton>
      <MenuList maxH="200px" overflowY="scroll">
        {coinsList?.map((coin) => (
          <MenuItem key={coin.address} onClick={() => setActive(coin)}>
            <HStack spacing="8px">
              <Image
                src={`/icons/iconsCurrency/${coin?.title}.svg`}
                width={24}
                height={24}
                alt={coin?.title}
              />
              <Text color="white">{coin?.title}</Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </ChakraMenu>
  );
};

export default Menu;
