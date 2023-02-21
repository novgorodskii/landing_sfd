import { useDisclosure } from "@chakra-ui/hooks";
import { useToast } from "@chakra-ui/toast";
import { createContext, useContext, useState } from "react";
import ErrorModal from "../components/ui/Modals/ErrorModal";
import ToastSuccess from "../components/ui/Modals/ToastSuccess";
import TransactionModal from "../components/ui/Modals/TransactionModal";
import WaitingConfirmationModal from "../components/ui/Modals/WaitingConfirmationModal";
import WaitingModal from "../components/ui/Modals/WaitingModal";

const TransactionManageContext = createContext({
  onConfirm: () => {},
  onWaiting: () => {},
  onTransaction: () => {},
  onSuccess: () => {},
  onError: () => {},
});

export const TransactionManageProvider = ({ children }) => {
  const confirmModal = useDisclosure();
  const waitingModal = useDisclosure();
  const transactionModal = useDisclosure();
  const errorModal = useDisclosure();

  const toast = useToast();

  const [transaction, setTransaction] = useState("");
  const [error, setError] = useState("");

  const onConfirm = () => {
    errorModal.onClose();
    transactionModal.onClose();
    waitingModal.onClose();
    confirmModal.onOpen();
  };

  const onWaiting = () => {
    confirmModal.onClose();
    transactionModal.onClose();
    waitingModal.onOpen();
  };

  const onTransaction = (data) => {
    confirmModal.onClose();
    waitingModal.onClose();
    console.log("onTransaction", data);
    setTransaction(data?.transactionHash);
    transactionModal.onOpen();
  };

  const onSuccess = (data) => {
    confirmModal.onClose();
    waitingModal.onClose();
    transactionModal.onClose();

    console.log("onSuccess", data);

    toast({
      duration: null,
      position: "top-right",
      render: (props) => {
        return (
          <ToastSuccess
            {...props}
            text={data?.text}
            title={data?.title}
            address={data?.address}
            description={data?.description}
            addressCopy={data?.addressCopy}
          />
        );
      },
    });
  };

  const onError = (error) => {
    confirmModal.onClose();
    waitingModal.onClose();
    transactionModal.onClose();

    setTransaction(error?.transactionHash);
    setError(error?.message);

    errorModal.onOpen();
  };

  return (
    <>
      <TransactionManageContext.Provider
        value={{
          onConfirm,
          onWaiting,
          onTransaction,
          onSuccess,
          onError,
        }}
      >
        {children}
        <ErrorModal {...errorModal} title={error} address={transaction} />
        <TransactionModal {...transactionModal} address={transaction} />
        <WaitingModal {...waitingModal} />
        <WaitingConfirmationModal {...confirmModal} />
      </TransactionManageContext.Provider>
    </>
  );
};

export const useTransactionManager = () => {
  return useContext(TransactionManageContext);
};
