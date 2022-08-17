import React, { useEffect, useState } from "react";
import localStyles from "./FancyCard.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import joinClasses from "../../utils/joinClasses";
import Image from "next/image";
type Props = {};
const cats = ["Posts", "Followers", "Following"];

const answs = ["36", "1200", "9"];
export default function FancyCard({}: Props) {
  return (
    <div className={localStyles.fancyCardBod}>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            aliquid magni, placeat illo at cupiditate doloribus ut ipsam
            officiis architecto facere.
          </p>
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
      <div className={localStyles.actButtCont}>
        <button className={sharedStyles.actionButton}>Follow</button>
      </div>
    </div>
  );
}
