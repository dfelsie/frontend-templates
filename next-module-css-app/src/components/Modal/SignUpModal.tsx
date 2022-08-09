import React, { useEffect, useState } from "react";
import localStyles from "./Modal.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import Modal from "./Modal";
import SignupForm from "./SignupForm";
type Props = {
  modalVisible: boolean;
  setModalVisible: (boolean) => void;
};
export default function SignUpModal({ modalVisible, setModalVisible }: Props) {
  return (
    <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <div className={localStyles.modalFormBody}>
        <h3>Sign Up!</h3>
        <SignupForm />
        <div
          onClick={(e) => {
            setModalVisible(false);
            e.stopPropagation();
          }}
          className={localStyles.closeDiv}
        >
          X
        </div>
      </div>
    </Modal>
  );
}
