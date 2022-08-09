import React, { useEffect, useState } from "react";
import localStyles from "./Footer.module.css";
import sharedStyles from "../../sharedStyles.module.css";
type Props = {
  headText: string;
  links: string[];
};
export default function FooterColumn({ headText, links }: Props) {
  return (
    <div className={localStyles.footerCol}>
      <h5>{headText}</h5>
      <ul>
        {links.map((val, i) => (
          <h6 key={`footItem${i}:${val}`}>{val}</h6>
        ))}
      </ul>
    </div>
  );
}
