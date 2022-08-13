import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout/Layout";
import ProfileCard from "../../components/Profile/ProfileCard";
import serverSideSessionReq from "../../utils/requests/serverSideSessionReq";

type Props = {
  userData: any;
};

export default function Profile({ userData }: Props) {
  const router = useRouter();
  const userEmail = userData?.email;

  return (
    <Layout userEmail={userEmail}>
      <ProfileCard />
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData = await serverSideSessionReq(context);
  console.log(userData, "Ud");
  return { props: { userData } };
};
