import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Link,
  useDisclosure,
 } from '@chakra-ui/react'
 import { useNetwork } from 'wagmi'

 export default function TransactionModal({ address, isOpen, onClose, onOpen }) {
  const modal = useDisclosure({ isOpen, onClose, onOpen });
  const { chain } = useNetwork();
  return (
    <>
      <Modal size="sm" isOpen={modal?.isOpen} onClose={modal?.onClose}>
        <ModalOverlay />
        <ModalContent textAlign="center">
          <ModalCloseButton />
          <ModalBody py={4} display="flex" flexDir="column">
            <Box fontSize="lg" fontWeight={600} my={4} color="white">
              Your transaction is submitted!
            </Box>
            {address && (
              <Link
                isExternal
                href={chain?.id === 420 ? `https://goerli-optimism.etherscan.io/tx/${address}` : `https://mumbai.polygonscan.com/tx/${address}`}
                fontSize="sm"
                color="#00C097"
                fontWeight={600}
              >
                View on {chain?.id === 420 ? "Optimism Goerli Etherscan" : "Mumbai Polyscan"}
              </Link>
            )}

            <Box mt={4} fontWeight={600} color="white">
              Once the transaction is completed, your contract will appear in the market
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
 }
