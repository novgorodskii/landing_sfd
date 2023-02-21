import { useTransactionManager } from "../../context/TransactionManage";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { getFaucet } from "../../utils/faucet";
import { useState, useEffect } from "react";

const Transaction = ({
  address,
  wallet,
  chainId,
}) => {
  const { onConfirm, onWaiting, onTransaction, onSuccess, onError } =
    useTransactionManager();

  const { isConnected } = useAccount();
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    setIsPressed(false);
  }, [address, wallet, chainId])


  const onClickHandler = async () => {
    if (address && wallet && chainId) {
      setIsPressed(true);
      getFaucet({
        chainId: chainId,
        tokens: [address],
        wallet: wallet,
      })
      onSuccess();
    }
  }

  return (
    <Button
      m="0 auto"
      variant="violet"
      isDisabled={!isConnected || isPressed}
      cursor="pointer"
      fontWeight={600}
      justifyContent={isPressed ? "center" : "space-between"}
      alignItems="center"
      size="md"
      w={140}
      onClick={onClickHandler}
    >
      {isPressed ? "Sent" : "Receive"}
      <ChevronRightIcon ml={4} fontSize="2xl" display={isPressed ? "none" : "block"} />
    </Button>
  );
};

export default Transaction;
