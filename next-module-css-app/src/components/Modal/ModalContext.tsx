import React, { useContext, useMemo } from "react";

export const ModalContext = React.createContext(undefined);

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalContextProvider = ({ closeModal, children }) => {
  const context = useMemo(() => {
    return {
      closeModal,
    };
  }, [closeModal]);

  return (
    <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
  );
};
