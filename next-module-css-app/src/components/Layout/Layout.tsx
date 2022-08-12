import React, { ReactNode, useEffect, useState } from "react";
import localStyles from "./Layout.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
type Props = {
  children?: ReactNode;
  color?: string;
  textColor?: string;
  userEmail?: string;
};
export default function Layout({
  children,
  color,
  textColor,
  userEmail,
}: Props) {
  return (
    <div
      className={localStyles.layout}
      style={{
        backgroundColor: color ?? "white",
        color: textColor ?? "black",
      }}
    >
      <Navbar userEmail={userEmail} />
      <div className={localStyles.body}>{children}</div>
      <Footer />
    </div>
  );
}
