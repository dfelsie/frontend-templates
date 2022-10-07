import React, { useEffect, useState } from "react";
import localStyles from "./Navbar.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import Modal from "../Modal/Modal";
import SignUpModal from "../Modal/SignUpModal";
import LogInModal from "../Modal/LogInModal";
import ButtonGroup from "./ButtonGroup";
import { useRouter } from "next/router";
import joinClasses from "../../utils/joinClasses";
import useQuery from "../../utils/hooks/useQuery";
import HamburgerMenu from "./HamburgerMenu";
import NavbarSearch from "./NavbarSearch";
type Props = {
  userEmail?: string;
};

export default function Navbar({ userEmail }: Props) {
  const isMobile = useQuery("(min-width: 768px)");
  const router = useRouter();
  let navBody = (
    <>
      <ButtonGroup userEmail={userEmail} router={router} />
      <NavbarSearch searchRouter={router} />
      <div className={localStyles.linkGrp}>
        <a className={joinClasses("aniLink", localStyles.navLink)} href="/">
          Home
        </a>
        <a className={joinClasses("aniLink", localStyles.navLink)} href="/me">
          Profile
        </a>
        <a className={joinClasses("aniLink", localStyles.navLink)}>Blogs</a>
        <a className={joinClasses("aniLink", localStyles.navLink)}>Users</a>
      </div>
    </>
  );
  if (isMobile) {
    return (
      <div className={localStyles.navDiv}>
        <HamburgerMenu>{navBody}</HamburgerMenu>
      </div>
    );
  }
  return <header className={localStyles.navDiv}> {navBody}</header>;
}
