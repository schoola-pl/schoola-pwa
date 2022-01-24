import React, { createContext, useContext, useState } from 'react';

interface ModalContextTypes {
  openModal: (modalContent: JSX.Element, title?: string) => void;
  closeModal: () => void;
  modalContent: JSX.Element;
  modalTitle: string;
  isOpen: boolean;
}

const ModalContext = createContext<ModalContextTypes>({
  openModal: () => {
    throw new Error('ModalContext.openModal is not implemented');
  },
  closeModal: () => {
    throw new Error('ModalContext.closeModal is not implemented');
  },
  modalContent: <></>,
  modalTitle: '',
  isOpen: false
});
export const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState(<></>);

  // This method will open modal and set the content and title
  const openModal = (modalContent: JSX.Element, title?: string) => {
    setModalTitle(title || '');
    setModalContent(modalContent);
    setIsOpen(true);
  };

  // This method will close modal and reset modal state
  const closeModal = () => {
    setIsOpen(false);
    setModalContent(<></>);
    setModalTitle('');
  };

  const values = {
    isOpen,
    modalContent,
    modalTitle,
    openModal,
    closeModal
  };
  return <ModalContext.Provider value={values}>{children}</ModalContext.Provider>;
};

export const useModal = (): ModalContextTypes => {
  const Modal = useContext(ModalContext);
  if (!Modal) {
    throw new Error('useModal must be used within an ModalProvider');
  }
  return Modal;
};
