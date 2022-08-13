import React, { useEffect, useState } from "react";
import localStyles from "./Navbar.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import Modal from "../Modal/Modal";
import SignUpModal from "../Modal/SignUpModal";
import LogInModal from "../Modal/LogInModal";
import ButtonGroup from "./ButtonGroup";
import { useRouter } from "next/router";
import joinClasses from "../../utils/joinClasses";
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
        <a className={joinClasses("aniLink", localStyles.navLink)} href="/bing">
          Blogs
        </a>
        <a className={joinClasses("aniLink", localStyles.navLink)}>Link 2</a>
        <a className={joinClasses("aniLink", localStyles.navLink)}>Link 3</a>
        <a className={joinClasses("aniLink", localStyles.navLink)}>Link 4</a>
      </div>
    </div>
  );
}
