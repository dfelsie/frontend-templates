import React, { useEffect, useState } from "react";
import localStyles from "./Footer.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import FooterColumn from "./FooterColumn";
type Props = {};
const headText = "Foot Head";
const linkTexts = ["Link 1", "Link 2", "Link 3"];
const linkTexts2 = ["Link 4", "Link 5", "Link 6"];
const linkTexts3 = ["Link 7", "Link 8", "Link 9"];
export default function Footer({}: Props) {
  return (
    <div className={localStyles.footDiv}>
      <FooterColumn headText={headText} links={linkTexts} />
      <FooterColumn headText={headText} links={linkTexts2} />
      <FooterColumn headText={headText} links={linkTexts3} />
    </div>
  );
}
