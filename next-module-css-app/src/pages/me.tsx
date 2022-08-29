import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";
import MyProfileCard from "../components/Profile/MyProfileCard";
import ProfileCard from "../components/Profile/ProfileCard";
import { backendRoute } from "../consts/consts";
import { useUser } from "../utils/hooks/useUser";
import serverSideSessionReq from "../utils/requests/serverSideSessionReq";
import sessionReq from "../utils/requests/sessionReq";

type Props = {
  userData: any;
};

export default function Me({ userData }: Props) {
  const router = useRouter();
  const userEmail = userData?.email;
  return (
    <Layout userEmail={userEmail}>
      <MyProfileCard userEmail={userEmail} />
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData = await serverSideSessionReq(context);
  console.log(userData, "Ud");
  if (!userData?.email) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // Pass data to the page via props
  return { props: { userData } };
};
