import React, { useEffect, useState } from "react";
import localStyles from "./Navbar.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import Modal from "../Modal/Modal";
import SignUpModal from "../Modal/SignUpModal";
import LogInModal from "../Modal/LogInModal";
type Props = {};
export default function Navbar({}: Props) {
  const [signUpModalVisible, setsignUpModalVisible] = useState(false);
  const [logInModalVisible, setlogInModalVisible] = useState(false);
  return (
    <div className={localStyles.navDiv}>
      {" "}
      <div className={localStyles.butGrp}>
        <button
          className={sharedStyles.actionButton}
          onClick={() => {
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
          onClick={() => {
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
      </div>{" "}
      <div className={localStyles.linkGrp}>
        <a className="aniLink" href="/bing">
          Link 1
        </a>
        <a className="aniLink">Link 2</a>
        <a className="aniLink">Link 3</a>
        <a className="aniLink">Link 4</a>
      </div>
    </div>
  );
}
