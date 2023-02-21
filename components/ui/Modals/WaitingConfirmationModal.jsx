import { Box, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import { PulseLoader } from "react-spinners";

export default function WaitingConfirmationModal({ isOpen, onClose, onOpen }) {
  const modal = useDisclosure({ isOpen, onClose, onOpen })

  return (
    <>
      <Modal size="sm" isCentered isOpen={modal?.isOpen} onClose={modal?.onClose}>
        <ModalOverlay />
        <ModalContent textAlign="center" flexDir="column">
          <ModalCloseButton />
          <ModalBody py={4} display="flex" flexDir="column">
            <Box fontSize="lg" fontWeight={600} my={4} color="white">
              Waiting for confirmation ...
            </Box>
            <PulseLoader
              color="#fff"
              size={8}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <Box my={4} fontWeight={600} color="white">
              Confirm this transaction in your wallet
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
