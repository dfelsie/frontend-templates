import React, { useEffect, useState } from "react";
import localStyles from "./Profile.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import Image from "next/image";
type Props = {};
export default function ProfileCard({}: Props) {
  return (
    <div className={localStyles.profBod}>
      {" "}
      <div className={localStyles.profPicCard}>
        <Image src={"assets/images/kobu.jpg"} layout="fill" />
      </div>
      <div className={localStyles.profSpace}>Card</div>
      <div className={localStyles.profDetails}>Deets</div>{" "}
    </div>
  );
}
