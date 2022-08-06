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
    </div>
  );
}
