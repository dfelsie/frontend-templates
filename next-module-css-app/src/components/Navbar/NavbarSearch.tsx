import React, { useEffect, useRef, useState } from "react";
import localStyles from "./Navbar.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { NextRouter } from "next/router";
type Props = {
  searchRouter: NextRouter;
};
export default function NavbarSearch({ searchRouter }: Props) {
  const inputEl = useRef(null);

  return (
    <form className={localStyles.searchDiv}>
      <input
        ref={inputEl}
        placeholder={"Search"}
        className={localStyles.searchInput}
      ></input>{" "}
      <button
        onClick={(e) => {
          console.log(inputEl.current.value);
          searchRouter.push(`/blogresults?q=${inputEl.current.value}`);
          e.preventDefault();
        }}
      >
        Go
      </button>
      {/*       <div className={localStyles.searchIcon}>&#x1F50D;</div>
       */}{" "}
    </form>
  );
}
