import React, { ReactNode, useEffect, useState } from "react";
import localStyles from "./Layout.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
type Props = {
  children?: ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className={localStyles.layout}>
      <Navbar />
      <div className={localStyles.body}>{children}</div>
      <Footer />
    </div>
  );
}
