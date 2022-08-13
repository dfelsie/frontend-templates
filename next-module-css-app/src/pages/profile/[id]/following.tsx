import { GetServerSideProps } from "next";
import React from "react";
import Follows from "../../../components/Follows/Follows";
import Layout from "../../../components/Layout/Layout";
import { fakeUserData } from "../../../consts/consts";
import { useUser } from "../../../utils/hooks/useUser";
import serverSideSessionReq from "../../../utils/requests/serverSideSessionReq";

type Props = {
  userData: any;
};
export default function following({ userData }: Props) {
  const userEmail = userData?.email;

  return (
    <Layout userEmail={userEmail}>
      <Follows followList={fakeUserData.followers} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData = await serverSideSessionReq(context);
  console.log(userData, "Ud");
  return { props: { userData } };
};
