import React, { useEffect, useState } from "react";
import localStyles from "./UserNavbar.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import joinClasses from "../../utils/joinClasses";
type Props = {};
export default function UserNavbar({}: Props) {
  return (
    <div className={localStyles.userNavDiv}>
      <div className={localStyles.userNavName}>
        <h2>Johnathon L'astname </h2>
      </div>
      <div className={localStyles.butGrp}>
        <button
          className={joinClasses(
            sharedStyles.actionButton,
            localStyles.linkBut
          )}
        >
          Overview
        </button>
        <button
          className={joinClasses(
            sharedStyles.actionButton,
            localStyles.linkBut
          )}
        >
          Blogs
        </button>
        <button
          className={joinClasses(
            sharedStyles.actionButton,
            localStyles.linkBut
          )}
        >
          Following
        </button>
        <button
          className={joinClasses(
            sharedStyles.actionButton,
            localStyles.linkBut
          )}
        >
          Follows
        </button>
      </div>
      <hr />
    </div>
  );
}
