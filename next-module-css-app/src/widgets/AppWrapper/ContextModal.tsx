import React, { useContext, useEffect, useState } from "react";
import localStyles from "./Modal.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import LoginForm from "../../components/Modal/LoginForm";
import SignupForm from "../../components/Modal/SignupForm";
import { CurrModal, ModalContext } from "./AppWrapper";

//Unused bcus old style more convenient,
//should be fine for future projects
type Props = {};
export default function ContextModal({}: Props) {
  const { currModal, setCurrModal } = useContext(ModalContext);
  console.log("ModalVal:", currModal);
  let body;
  switch (currModal) {
    case "login":
      body = (
        <div className={localStyles.modalFormBody}>
          <h3>Log in</h3>
          <LoginForm />
          <div
            onClick={(e) => {
              //setModalVisible(false);

              e.stopPropagation();
            }}
            className={localStyles.closeDiv}
          >
            X
          </div>
        </div>
      );
      break;

    case "register":
      body = (
        <div className={localStyles.modalFormBody}>
          <h3>Log in</h3>
          <SignupForm />
          <div
            onClick={(e) => {
              //setModalVisible(false);

              e.stopPropagation();
            }}
            className={localStyles.closeDiv}
          >
            X
          </div>
        </div>
      );
      break;
    default:
      body = <></>;
  }
  return (
    <div
      style={{
        display: currModal === "none" ? "none" : "",
      }}
      onClick={(e) => {
        e.stopPropagation();
        console.log(currModal);
        //setCurrModal("none");
        // setModalVisible(false);
      }}
      className={localStyles.modalBack}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {body}
      </div>
    </div>
  );
}
