import React, { useEffect, useState } from "react";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";
import colorConsts from "../consts/colorConsts";
import { useUser } from "../utils/hooks/useUser";
type Props = {};
export default function Index({}: Props) {
  const [user, { mutate }] = useUser();

  return (
    <Layout userEmail={user}>
      <Home />
    </Layout>
  );
}
