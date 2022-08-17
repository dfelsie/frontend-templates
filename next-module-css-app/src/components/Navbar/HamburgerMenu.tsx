import React, { ReactNode, useEffect, useState } from "react";
import localStyles from "./Navbar.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import SideAccordion from "../../widgets/SideAccordion/SideAccordion";
type Props = {
  children?: ReactNode;
};
export default function HamburgerMenu({ children }: Props) {
  const [showAccordion, setShowAccordion] = useState(false);

  return (
    <div
      className={localStyles.hamDiv}
      onClick={() => {
        setShowAccordion(!showAccordion);
      }}
    >
      <div className={localStyles.hamIcon}>&#9776;</div>
      <SideAccordion
        showAccordion={showAccordion}
        setShowAccordion={() => {
          setShowAccordion;
        }}
      />
    </div>
  );
}
