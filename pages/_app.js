import '../styles/globals.css'
import { TransactionManageProvider } from "../context/TransactionManage";
import theme from "../theme";
import { ChakraProvider } from "@chakra-ui/react";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { optimismGoerli, polygonMumbai } from "wagmi/chains";
import { GilroyFont } from "../components/ui/GilroyFont";

const { chains, provider } = configureChains(
  [
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [polygonMumbai, optimismGoerli]
      : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Deforex Faucet",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        showRecentTransactions={true}
        modalSize="compact"
        theme={darkTheme({
          accentColor: "#7b3fe4",
          accentColorForeground: "white",
          borderRadius: "medium",
          overlayBlur: "none",
        })}
        chains={chains}
      >
        <ChakraProvider theme={theme}>
          <GilroyFont />
          <TransactionManageProvider>
            <Component {...pageProps} />
          </TransactionManageProvider>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
