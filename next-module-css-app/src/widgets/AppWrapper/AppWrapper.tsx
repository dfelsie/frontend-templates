import React from "react";

type Props = {
  children?: React.ReactNode;
};
export type CurrModal = "none" | "login" | "register";

export const ModalContext = React.createContext<{
  currModal: CurrModal;
  setCurrModal: React.Dispatch<React.SetStateAction<CurrModal>>;
}>(null);

export default function AppWrapper({ children }: Props) {
  const [currModal, setCurrModal] = React.useState<CurrModal>("login");
  let cm: CurrModal = "none";
  return (
    <ModalContext.Provider value={{ currModal, setCurrModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useAppContext() {
  return React.useContext(ModalContext);
}
