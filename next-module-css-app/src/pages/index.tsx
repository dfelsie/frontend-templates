import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";
import ContextModal from "../components/Modal/ContextModal";
import serverSideSessionReq from "../utils/requests/serverSideSessionReq";
type Props = {
  userData: any;
};

export default function Index({ userData }: Props) {
  //const [user, { mutate }] = useUser();
  const userEmail = userData?.email;

  return (
    <Layout userEmail={userEmail}>
      <Home />
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData = await serverSideSessionReq(context);
  console.log(userData, "Ud");
  return { props: { userData } };
};
