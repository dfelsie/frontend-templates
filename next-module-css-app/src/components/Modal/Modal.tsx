import React, { ReactNode, useEffect, useState } from "react";
import localStyles from "./Modal.module.css";
import sharedStyles from "../../sharedStyles.module.css";
type Props = {
  children?: ReactNode;
  modalVisible: boolean;
  setModalVisible: (boolean) => void;
};
export default function Modal({
  children,
  modalVisible,
  setModalVisible,
}: Props) {
  return (
    <div
      style={{
        display: modalVisible ? "" : "none",
      }}
      onClick={(e) => {
        e.stopPropagation();
        setModalVisible(false);
      }}
      className={localStyles.modalBack}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>{" "}
    </div>
  );
}
