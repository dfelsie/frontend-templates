import React, { useEffect, useState } from "react";
import localStyles from "./Profile.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import Image from "next/image";
import joinClasses from "../../utils/joinClasses";
import Modal from "../Modal/Modal";
import { useRouter } from "next/router";
import Link from "next/link";
type Props = {};
export default function ProfileCard({}: Props) {
  const router = useRouter();
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
        <h4>{router.query.id}</h4>
      </div>
      <div className={localStyles.profSpace}></div>
      <div className={localStyles.profDetails}>
        <Link href={`${router.query.id}/blogs`}>
          <div className={localStyles.viewMoreRow}>
            <h4>Blogs</h4>
            <h4>View All</h4>
          </div>
        </Link>
        <Link href={`${router.query.id}/follows`}>
          <div className={localStyles.viewMoreRow}>
            <h4>Follows</h4>
            <h4>View All</h4>
          </div>
        </Link>
        <Link href={`${router.query.id}/following`}>
          <div className={localStyles.viewMoreRow}>
            <h4>Following</h4>
            <h4>View All</h4>
          </div>
        </Link>
      </div>{" "}
    </div>
  );
}
