import React, { useEffect, useState } from "react";
import localStyles from "./Navbar.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import LogInModal from "../Modal/LogInModal";
import SignUpModal from "../Modal/SignUpModal";
import logoutReq from "../../utils/requests/logoutReq";
import { NextRouter, useRouter } from "next/router";
type Props = {
  userEmail?: string;
  router: NextRouter;
};
export default function ButtonGroup({ userEmail, router }: Props) {
  const [signUpModalVisible, setsignUpModalVisible] = useState(false);
  const [logInModalVisible, setlogInModalVisible] = useState(false);
  let buttonBody;
  if (!userEmail) {
    buttonBody = (
      <>
        <button
          className={sharedStyles.actionButton}
          onClick={(e) => {
            e.stopPropagation();
            setsignUpModalVisible(true);
          }}
        >
          Sign up
        </button>
        <SignUpModal
          setModalVisible={setsignUpModalVisible}
          modalVisible={signUpModalVisible}
        />
        <button
          className={sharedStyles.actionButton}
          onClick={(e) => {
            e.stopPropagation();
            setlogInModalVisible(true);
          }}
        >
          Log in
        </button>
        {/* Putting the modal in the button causes weird errors lmao */}
        <LogInModal
          setModalVisible={setlogInModalVisible}
          modalVisible={logInModalVisible}
        />
      </>
    );
  } else {
    buttonBody = (
      <button
        className={sharedStyles.actionButton}
        onClick={async () => {
          logoutReq().then(() => {
            window.location.reload();
          });
          //router.push("/");
          //setsignUpModalVisible(true);
        }}
      >
        Log out
      </button>
    );
  }
  return <div className={localStyles.butGrp}>{buttonBody}</div>;
}
