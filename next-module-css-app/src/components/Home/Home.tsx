import React, { useEffect, useState } from "react";
import localStyles from "./Home.module.css";
import sharedStyles from "../../sharedStyles.module.css";
type Props = {};
export default function Home({}: Props) {
  return (
    <div className={localStyles.home}>
      {" "}
      <h2>Welcome to Next-Blog</h2>
      <p>The only blog site you'll ever need.</p>{" "}
      {/* <div className={localStyles.allFactCont}>
        <div className={localStyles.factCont}>
          Icon
          <div className={localStyles.factText}>
            <h6>Text</h6>
            <p>Body</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

const Fact = (props: Props) => {
  return <div>Home</div>;
};
