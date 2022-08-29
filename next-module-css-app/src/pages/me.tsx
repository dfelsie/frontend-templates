import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout/Layout";
import MyProfileCard from "../components/Profile/MyProfileCard";
import serverSideSessionReq from "../utils/requests/serverSideSessionReq";

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
