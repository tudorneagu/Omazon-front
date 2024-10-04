import { createContext, useState } from "react";
import type { ReactNode } from "react";

export type ModalsState = { [key: string]: boolean };

export type ModalContextType = {
  modals: ModalsState;
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
};

const defaultModalContextValue: ModalContextType = {
  modals: {},
  openModal: () => {},
  closeModal: () => {},
};

const ModalContext = createContext<ModalContextType>(defaultModalContextValue);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modals, setModals] = useState<ModalsState>({});

  const openModal = (modalName: string) => {
    setModals((prev) => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName: string) => {
    setModals((prev) => ({ ...prev, [modalName]: false }));
  };

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
