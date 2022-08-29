import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";
import ContextModal from "../widgets/AppWrapper/ContextModal";
import serverSideSessionReq from "../utils/requests/serverSideSessionReq";
type Props = {
  userData: any;
};

export default function Index({ userData }: Props) {
  const userEmail = userData?.email;

  return (
    <Layout userEmail={userEmail}>
      <Home />
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData = (await serverSideSessionReq(context)) ?? null;
  console.log(userData, "Ud");
  return { props: { userData } };
};
