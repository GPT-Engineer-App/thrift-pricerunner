import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Image, Text, Button, Link } from "@chakra-ui/react";

const DealModal = ({ isOpen, onClose, item }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{item.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={item.image} mb={4} />
          <Text fontSize="xl" mb={4}>
            {item.price}
          </Text>
        </ModalBody>

        <ModalFooter>
          <Link href={item.url} isExternal>
            <Button colorScheme="red" mr={3}>
              Go to Deal!
            </Button>
          </Link>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DealModal;
