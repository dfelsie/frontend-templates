import React, { useEffect, useState } from "react";
import localStyles from "./Modal.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import Modal from "./Modal";
type Props = {
  modalVisible: boolean;
  setModalVisible: (boolean) => void;
};
export default function SignUpModal({ modalVisible, setModalVisible }: Props) {
  return (
    <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <div className={localStyles.modalFormBody}>Sign Up!</div>
    </Modal>
  );
}
