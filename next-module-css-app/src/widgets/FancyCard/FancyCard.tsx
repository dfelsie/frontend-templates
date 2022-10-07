import React, { useEffect, useState } from "react";
import localStyles from "./FancyCard.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import joinClasses from "../../utils/joinClasses";
import Image from "next/image";
import { useRouter } from "next/router";
import deleteFollow from "../../utils/requests/deleteFollow";
import postFollow from "../../utils/requests/postFollow";
type Props = {
  username?: string;
  postCount: number;
  followCount: number;
  followerCount: number;
  currUserId: string;
  currUserDoesFollow?: boolean;
};
const cats = ["Posts", "Following", "Followers"];

const answs = ["36", "1200", "9"];
export default function FancyCard({
  username,
  postCount,
  followCount,
  followerCount,
  currUserId,
  currUserDoesFollow,
}: Props) {
  const router = useRouter();
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
          <h3>{username ?? "Adam Smith"}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            aliquid magni, placeat illo at cupiditate doloribus ut ipsam
            officiis architecto facere.
          </p>
        </div>
      </div>
      <hr />
      <div className={localStyles.bodyRowCont}>
        <div className={localStyles.bodyRow}>
          <p>{cats[0]}</p>
          <p>{postCount}</p>
        </div>
        <div className={localStyles.bodyRow}>
          <p>{cats[1]}</p>
          <p>{followCount}</p>
        </div>
        <div className={localStyles.bodyRow}>
          <p>{cats[2]}</p>
          <p>{followerCount}</p>
        </div>
      </div>
      {currUserId && (
        <div className={localStyles.actButtCont}>
          <button
            onClick={
              currUserDoesFollow
                ? async () => {
                    console.log("Follow");
                    await deleteFollow(username);
                  }
                : async () => {
                    console.log("Follow");
                    await postFollow(
                      currUserId,
                      router.query.id as string,
                      username
                    );
                  }
            }
            className={sharedStyles.actionButton}
          >
            {currUserDoesFollow ? "Unfollow" : "Follow"}
          </button>
        </div>
      )}
    </div>
  );
}
