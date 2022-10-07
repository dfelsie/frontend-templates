import React, { ReactNode, useEffect, useState } from "react";
import localStyles from "./SideAccordion.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import joinClasses from "../../utils/joinClasses";
import Link from "next/link";
import ButtonGroup from "../../components/Navbar/ButtonGroup";
import NavbarSearch from "../../components/Navbar/NavbarSearch";
import { useRouter } from "next/router";
type Props = {
  showAccordion: boolean;
  setShowAccordion: (showAcc: boolean) => void;
};
export default function SideAccordion({
  showAccordion,
  setShowAccordion,
}: Props) {
  const router = useRouter();
  return (
    <div
      className={joinClasses(
        localStyles.panel,
        showAccordion ? "" : localStyles.hidd
      )}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <ul
        className={joinClasses(localStyles.panelList, localStyles.panelEnter)}
      >
        <ButtonGroup router={undefined} />
        <NavbarSearch searchRouter={router} />

        <li>
          <Link href="/">
            <h5>Link 1</h5>
          </Link>
        </li>
        <li>
          <Link href="/">
            <h5>Link 2</h5>
          </Link>
        </li>
        <li>
          <Link href="/">
            <h5>Link 3</h5>
          </Link>
        </li>
        <li>
          <Link href="/">
            <h5>Link 4</h5>
          </Link>
        </li>
      </ul>
      <div
        className={localStyles.arrowIcon}
        onClick={(e) => {
          setShowAccordion(false);
          e.stopPropagation();
        }}
      >
        &#8592;
      </div>
    </div>
  );
}
