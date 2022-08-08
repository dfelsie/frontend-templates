import React, { useEffect, useState } from "react";
import localStyles from "./Profile.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import Image from "next/image";
import joinClasses from "../../utils/joinClasses";
import Modal from "../Modal/Modal";
type Props = {};
export default function ProfileCard({}: Props) {
  return (
    <div className={localStyles.profBod}>
      {" "}
      <div className={joinClasses(localStyles.profPicCard)}>
        <div
          className={joinClasses(
            sharedStyles.nextImgCont,
            localStyles.profAvatar
          )}
        >
          <Image src={"/assets/images/kobu.jpg"} layout="fill" />
        </div>
        <h2>Johnathon L'Astname</h2>
      </div>
      <div className={localStyles.profSpace}></div>
      <div className={localStyles.profDetails}>
        <div>Blogs</div>
        <div>Follows</div>
        <div>Following</div>
      </div>{" "}
    </div>
  );
}
