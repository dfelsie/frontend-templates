import React, { useEffect, useState } from "react";
import localStyles from "./FancyCard.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import joinClasses from "../../utils/joinClasses";
import Image from "next/image";
import Link from "next/link";
import { frontendRoute } from "../../consts/consts";
type Props = {
  blogs: any[];
  followers: any[];
  follows: any[];
};
const names = ["John Smith", "John Smith", "John Smith", "John Smith"];
const blogString =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus necessitatibus tempora sed officia quidem aspernatur voluptates, non eum temporibus doloremque molestias ducimus. Dolorum eos maiores minima explicabo aliquid, non at!";
const blogStrings = ["Blog 1", "Blog 1", "Blog 1", "Blog 1"];
export default function FancyOverviewCard({
  blogs,
  followers,
  follows,
}: Props) {
  return (
    <div
      className={joinClasses(
        localStyles.fancyCardBod,
        localStyles.overviewCard
      )}
    >
      <div className={localStyles.overviewSec}>
        <h4>Blogs</h4>
        <ul className={localStyles.overviewList}>
          <li>
            {blogs.map((val, i) => (
              <BlogLink blog={val} key={`blogLinkNum${i}`} />
            ))}
          </li>
        </ul>
        <div className={localStyles.actButtCont}>
          <button className={sharedStyles.actionButton}>View All</button>
        </div>
      </div>
      <div className={localStyles.overviewSec}>
        <h4>Following</h4>
        <div className={localStyles.overviewSecGrid}>
          {follows.map((val, i) => (
            <ProfWidget
              profId={`${val.id}`}
              username={val.followingName}
              key={`followerNum${i}`}
              imgSrc={"/assets/images/kobu.jpg"}
            />
          ))}
        </div>
        <div className={localStyles.actButtCont}>
          <button className={sharedStyles.actionButton}>View All</button>
        </div>{" "}
      </div>
      <div>
        <h4>Followers</h4>
        <div className={localStyles.overviewSecGrid}>
          {followers.map((val, i) => (
            <ProfWidget
              profId={`${val.follower.id}`}
              username={val.followerName}
              key={`followerNum${i}`}
              imgSrc={"/assets/images/kobu.jpg"}
            />
          ))}
        </div>
        <div className={localStyles.actButtCont}>
          <button className={sharedStyles.actionButton}>View All</button>
        </div>{" "}
      </div>
    </div>
  );
}
type ProfWidgetProps = {
  imgSrc?: string;
  username: string;
  profId?: string;
};
function ProfWidget({ imgSrc, username, profId }: ProfWidgetProps) {
  return (
    <Link href={`${frontendRoute}/profile/${profId}` ?? "/"}>
      <div className={localStyles.otherAva}>
        <div
          className={joinClasses(
            sharedStyles.nextImgCont,
            localStyles.overviewAvatar
          )}
        >
          <Image src={imgSrc ?? "/assets/images/kobu.jpg"} layout="fill" />
        </div>
        <h5>{username}</h5>
      </div>
    </Link>
  );
}

type BlogLinkProps = {
  blog: any;
};
function BlogLink({ blog }: BlogLinkProps) {
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className={localStyles.blogLink}>
        <h6>{blog.title}</h6>
        <p>
          {blogString.slice(0, 50) + "..."}{" "}
          <span className={localStyles.arrowIcon}>&#8594;</span>{" "}
        </p>
      </div>
    </Link>
  );
}
