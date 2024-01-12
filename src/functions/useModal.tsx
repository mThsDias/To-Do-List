import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  const openModal = (message: string) => {
    setModalMessage(message);
    setIsOpen(true);
  };

  const closeModal = () => {
    setModalMessage("");
    setIsOpen(false);
  };

  return {
    isOpen,
    modalMessage,
    openModal,
    closeModal,
  };
};
