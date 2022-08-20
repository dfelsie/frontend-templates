import React, { useEffect, useState } from "react";
import localStyles from "./Profile.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import FancyCard from "../../widgets/FancyCard/FancyCard";
import FancyOverviewCard from "../../widgets/FancyCard/FancyOverviewCard";
type Props = {
  userName: string;
  blogs: any[];
  followers: any[];
  follows: any[];
  userId: string;
  currUserDoesFollow: boolean;
};
export default function ProfileBody({
  blogs,
  followers,
  follows,
  userName,
  userId,
  currUserDoesFollow,
}: Props) {
  return (
    <div>
      <FancyCard
        username={userName}
        postCount={blogs.length}
        followCount={follows.length}
        followerCount={followers.length}
        currUserId={userId}
        currUserDoesFollow={currUserDoesFollow}
      />
      <div
        style={{
          height: "100px",
        }}
      ></div>
      <FancyOverviewCard
        blogs={blogs}
        followers={followers}
        follows={follows}
      />
    </div>
  );
}
