import React, { useEffect, useState } from "react";
import localStyles from "./Navbar.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import Modal from "../Modal/Modal";
import SignUpModal from "../Modal/SignUpModal";
import LogInModal from "../Modal/LogInModal";
import ButtonGroup from "./ButtonGroup";
import { useRouter } from "next/router";
type Props = {
  userEmail?: string;
};
export default function Navbar({ userEmail }: Props) {
  const router = useRouter();
  return (
    <div className={localStyles.navDiv}>
      {" "}
      <ButtonGroup userEmail={userEmail} router={router} />
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
