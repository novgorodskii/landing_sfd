import addresses from "../../contracts/addresses";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import Menu from "../ui/Menu";
import Transaction from "./Transaction";

export default function CreateForm({ as }) {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const coinsArr = addresses.filter(
    (address) => address?.id === chain?.id
  )[0]?.tokens;
  const [activeCoin, setActiveCoin] = useState(
    coinsArr?.length && coinsArr[0]
  );

  useEffect(() => {
    if (coinsArr) {
      setActiveCoin(coinsArr[0]);
    }
  }, [chain?.id]);

  return (
    <>
      <Box mt={-15}>
        <Box my={5} fontWeight={600}>
          Get testnet tokens <br /> to start trading
        </Box>
        <Text my={5} fontWeight={600}>(One coin request per 24 hours)</Text>
        <Menu
          active={activeCoin}
          setActive={setActiveCoin}
          coinsList={coinsArr}
        />
      </Box>

      <Box mt={6}>
        <SimpleGrid columns={1} spacing={4}>
          <Transaction
            address={activeCoin?.address}
            wallet={address}
            chainId={chain?.id}
          />
        </SimpleGrid>
      </Box>
    </>
  );
}
