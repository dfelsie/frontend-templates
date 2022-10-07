import { GetServerSideProps } from "next";
import React from "react";
import Follows from "../../../components/Follows/Follows";
import Layout from "../../../components/Layout/Layout";
import { fakeUserData } from "../../../consts/consts";
import getServerSideSessionReq from "../../../utils/requests/getServerSideSessionReq";

type Props = {
  userData: any;
};

export default function follows({ userData }: Props) {
  const userEmail = userData?.email;

  return (
    <Layout userEmail={userEmail}>
      <Follows followList={fakeUserData.followers} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData = await getServerSideSessionReq(context);
  console.log(userData, "Ud");
  return { props: { userData } };
};
