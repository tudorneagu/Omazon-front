import {
  createContext,
  useState,
  useEffect,
  useRef,
  type ReactNode,
  useCallback,
} from "react";
import type { ModalsState } from "../@types/index.types";

export type ModalContextType = {
  closeModal: (modalName: string) => void;
  openModal: (modalName: string) => void;
  stopPropagation: (event: React.MouseEvent<HTMLDivElement>) => void;
  modals: ModalsState;
  emailRef: React.RefObject<HTMLInputElement>;
};

const ModalContext = createContext<ModalContextType>();

function ModalProvider({ children }: { children: ReactNode }) {
  const [modals, setModals] = useState<ModalsState>({});
  const emailRef = useRef<HTMLInputElement>(null);
  const openModal = (modalName: string) =>
    setModals({ ...modals, [modalName]: true });

  const closeModal = (modalName: string) => {
    setModals({ ...modals, [modalName]: false });
  };

  const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModals((modals) => {
          const newModals = { ...modals };
          for (const key of Object.keys(newModals)) {
            newModals[key] = false;
          }
          return newModals;
        });
      }
    };
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const focusEmailInput = useCallback(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (modals.login) {
      focusEmailInput();
    }
  }, [modals.login, focusEmailInput]);

  return (
    <ModalContext.Provider
      value={{
        closeModal,
        openModal,
        stopPropagation,
        modals,
        emailRef,
      }}>
      {children}
    </ModalContext.Provider>
  );
}

export { ModalContext, ModalProvider };
