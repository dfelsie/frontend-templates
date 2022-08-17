import React, { useEffect, useState } from "react";
import localStyles from "./FancyCard.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import joinClasses from "../../utils/joinClasses";
import Image from "next/image";
import Link from "next/link";
type Props = {};
const names = ["John Smith", "John Smith", "John Smith", "John Smith"];
const blogString =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus necessitatibus tempora sed officia quidem aspernatur voluptates, non eum temporibus doloremque molestias ducimus. Dolorum eos maiores minima explicabo aliquid, non at!";
const blogStrings = ["Blog 1", "Blog 1", "Blog 1", "Blog 1"];
export default function FancyOverviewCard({}: Props) {
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
            {blogStrings.map((val, i) => (
              <BlogLink blogname={val} key={`blogLinkNum${i}`} />
            ))}
          </li>
        </ul>
        <div className={localStyles.actButtCont}>
          <button className={sharedStyles.actionButton}>Follow</button>
        </div>
      </div>
      <div className={localStyles.overviewSec}>
        <h4>Following</h4>
        <div className={localStyles.overviewSecGrid}>
          {names.map((val, i) => (
            <ProfWidget
              username={val}
              key={`followerNum${i}`}
              imgSrc={"/assets/images/kobu.jpg"}
            />
          ))}
        </div>
        <div className={localStyles.actButtCont}>
          <button className={sharedStyles.actionButton}>Follow</button>
        </div>{" "}
      </div>
      <div>
        <h4>Fpllo</h4>
        <div className={localStyles.overviewSecGrid}>
          {names.map((val, i) => (
            <ProfWidget
              username={val}
              key={`followerNum${i}`}
              imgSrc={"/assets/images/kobu.jpg"}
            />
          ))}
        </div>
        <div className={localStyles.actButtCont}>
          <button className={sharedStyles.actionButton}>Follow</button>
        </div>{" "}
      </div>
    </div>
  );
}
type ProfWidgetProps = {
  imgSrc?: string;
  username: string;
  profLink?: string;
};
function ProfWidget({ imgSrc, username, profLink }: ProfWidgetProps) {
  return (
    <Link href={profLink ?? "/"}>
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
  blogText?: string;
  blogname: string;
};
function BlogLink({ blogname, blogText }: BlogLinkProps) {
  return (
    <Link href="/">
      <div className={localStyles.blogLink}>
        <h6>{blogname}</h6>
        <p>
          {blogString.slice(0, 50) + "..."}{" "}
          <span className={localStyles.arrowIcon}>&#8594;</span>{" "}
        </p>
      </div>
    </Link>
  );
}
