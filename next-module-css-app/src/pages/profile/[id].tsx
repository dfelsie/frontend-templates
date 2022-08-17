import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout/Layout";
import ProfileBody from "../../components/Profile/ProfileBody";
import ProfileCard from "../../components/Profile/ProfileCard";
import colors from "../../consts/colorConsts";
import serverSideSessionReq from "../../utils/requests/serverSideSessionReq";

type Props = {
  userData: any;
};

export default function Profile({ userData }: Props) {
  const router = useRouter();
  const userEmail = userData?.email;

  return (
    <Layout color={colors.champagne} userEmail={userEmail}>
      <ProfileBody />
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData = await serverSideSessionReq(context);
  console.log(userData, "Ud");
  return { props: { userData } };
};
