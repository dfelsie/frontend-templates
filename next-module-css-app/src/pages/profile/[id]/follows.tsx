import React from "react";
import Follows from "../../../components/Follows/Follows";
import Layout from "../../../components/Layout/Layout";
import { fakeUserData } from "../../../consts/consts";

type Props = {};

export default function follows({}: Props) {
  return (
    <Layout>
      <Follows followList={fakeUserData.followers} />
    </Layout>
  );
}
