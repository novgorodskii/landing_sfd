import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const ConnectBtn = () => {
  
  return (
    <ConnectButton
      label="Connect wallet"
      showBalance
      chainStatus="full"
      accountStatus="full"
    />
  );
};

export default ConnectBtn;
