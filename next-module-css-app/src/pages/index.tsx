import React, { useEffect, useState } from "react";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";
import colorConsts from "../consts/colorConsts";
type Props = {};
export default function Index({}: Props) {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
