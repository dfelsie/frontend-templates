import React, { useEffect, useState } from "react";
import localStyles from "./Follow.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import Image from "next/image";
import joinClasses from "../../utils/joinClasses";
type Props = {
  followList: any[];
};
export default function Follows({ followList }: Props) {
  return (
    <div>
      <div className={localStyles.followGrid}>
        {" "}
        {followList.map((val, i) => (
          <div
            key={`followIcon${i}`}
            className={joinClasses(
              sharedStyles.nextImgCont,
              localStyles.profAvatar
            )}
          >
            <Image src={"/assets/images/kobu.jpg"} layout="fill" />
          </div>
        ))}{" "}
      </div>
    </div>
  );
}
