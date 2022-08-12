import React, { useEffect, useState } from "react";
import localStyles from "./FancyCard.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import joinClasses from "../../utils/joinClasses";
import Image from "next/image";
type Props = {};
const cats = [
  "Current Position",
  "Current Position",
  "Current Position",
  "Current Position",
  "Current Position",
];

const answs = [
  "Computer Networking",
  "Computer Networking",
  "Computer Networking",
  "Computer Networking",
  "Computer Networking",
];
export default function FancyCard({}: Props) {
  return (
    <div className={localStyles.fancyCardBod}>
      {" "}
      FancyCard
      <div className={localStyles.headRow}>
        <div
          className={joinClasses(
            sharedStyles.nextImgCont,
            sharedStyles.profAvatar
          )}
        >
          <Image src={"/assets/images/kobu.jpg"} layout="fill" />
        </div>
        <div className={localStyles.headText}>
          <h3>Johnathon L'Astname</h3>
          <h5>Worker</h5>
          <h5>USA, New York, New York</h5>
        </div>
      </div>
      <hr />
      <div className={localStyles.bodyRowCont}>
        {cats.map((val, i) => (
          <div className={localStyles.bodyRow} key={`cardBodyRow${i}`}>
            <p>{val}</p>
            <p>{answs[i]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
