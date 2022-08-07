import React, { useEffect, useState } from "react";
import localStyles from "./Navbar.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import Button from "../../widgets/Button/Button";
type Props = {};
export default function Navbar({}: Props) {
  return (
    <div className={localStyles.navDiv}>
      {" "}
      <div className={localStyles.butGrp}>
        <button
          className={sharedStyles.actionButton}
          onClick={() => {
            console.log("B");
          }}
        >
          Sign in
        </button>
        <button className={sharedStyles.actionButton}>Log in</button>
      </div>{" "}
      <div className={localStyles.linkGrp}>
        <a href="/bing">Link 1</a>
        <a>Link 2</a>
        <a>Link 3</a>
        <a>Link 4</a>
      </div>
    </div>
  );
}
