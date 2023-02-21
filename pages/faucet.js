import { useAccount, useNetwork } from "wagmi";
import FaucetHeader from "../components/Faucet/FaucetHeader";
import Main from "../components/Main";
import { Box, Button, Container, Stack, Text } from "@chakra-ui/react";
import ConnectBtn from "../components/ConnectBtn";
import Link from "next/link";
import CreateForm from "../components/Faucet/CreateForm";
import dynamic from "next/dynamic";

function Home() {
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  return (
    <>
      <FaucetHeader />
      <Main>
        <Container maxW="1400px" mb={16}>
          <Box fontWeight={600} fontSize="44" textAlign="center">
            <h1>GoDeFX Test Faucet</h1>
          </Box>
        </Container>
        <Container maxW="400px">
          {!isConnected && (
            <Box>
              <Stack mt={6} mb={6} bg="#22262B" p={5} py={6} borderRadius="2xl">
                <Box mt={0} mb={6}>
                  <Text fontWeight={600} textAlign="center">
                    Connect your wallet to the app to use faucet
                  </Text>
                </Box>

                <Box display="flex" justifyContent="center">
                  <ConnectBtn />
                </Box>
              </Stack>
            </Box>
          )}

          {isConnected ? (
            <>
              <Box>
                <Stack
                  mt={6}
                  mb={6}
                  bg="#22262B"
                  p={3}
                  py={3}
                  borderRadius="2xl"
                >
                  <Box mt={2} mb={6}>
                    <Text fontWeight={600} textAlign="center">
                      {chain?.id === 420
                        ? "Get testnet Ether (ETH) at Optimism Goerli"
                        : "Get testnet Polygon (MATIC) at Polygon Mumbai"}
                    </Text>
                    <Text fontWeight={600} textAlign="center">
                      (Faucet for paying transaction fees)
                    </Text>
                  </Box>

                  <Box display="flex" justifyContent="center">
                    <Link
                      href={
                        chain?.id === 420
                          ? "https://goerlifaucet.com/?a=818c11a8da"
                          : "https://mumbaifaucet.com/"
                      }
                      target="_blank"
                    >
                      <Button variant="violet" w="140px">
                        Go to Faucet
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Box>
              <Box
                bg="#121417"
                borderRadius="2xl"
                textAlign="center"
                fontWeight={600}
              >
                <Box bg="#22262B" p={5} py={6} borderRadius="2xl">
                  <Stack spacing={4}>
                    <CreateForm as="investor" />
                  </Stack>
                </Box>
              </Box>
              <Box>
                <Stack
                  mt={6}
                  mb={6}
                  bg="#22262B"
                  p={3}
                  py={5}
                  borderRadius="2xl"
                >
                  <Box mt={2} mb={6}>
                    <Text fontWeight={600} textAlign="center">
                      You’re all set!
                    </Text>
                  </Box>

                  <Box display="flex" justifyContent="center">
                    <Link
                      href="https://deforex.godefx.com/dashboard"
                      target="_blank"
                    >
                      <Button variant="violet">Open Dashboard</Button>
                    </Link>
                  </Box>
                </Stack>
              </Box>
            </>
          ) : null}
        </Container>
      </Main>
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
