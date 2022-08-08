import React, { useEffect, useState } from "react";
import localStyles from "./Modal.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import Modal from "./Modal";
type Props = {
  modalVisible: boolean;
  setModalVisible: (boolean) => void;
};
export default function LogInModal({ modalVisible, setModalVisible }: Props) {
  return (
    <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <div className={localStyles.modalFormBody}>Log In!</div>
    </Modal>
  );
}
