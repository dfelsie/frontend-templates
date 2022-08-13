import { GetServerSideProps } from "next";
import React from "react";
import BlogPreview from "../components/Blog/BlogPreview";
import Layout from "../components/Layout/Layout";
import { fakeUserData } from "../consts/consts";
import serverSideSessionReq from "../utils/requests/serverSideSessionReq";
import UserNavbar from "../widgets/UserNavBar/UserNavbar";

type Props = {
  userData: any;
};

export default function blogwriter({ userData }: Props) {
  const userEmail = userData?.email;

  return <Layout userEmail={userEmail}></Layout>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData = await serverSideSessionReq(context);
  console.log(userData, "Ud");
  return { props: { userData } };
};
