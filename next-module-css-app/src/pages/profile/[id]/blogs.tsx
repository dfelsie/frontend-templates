import { GetServerSideProps } from "next";
import React from "react";
import BlogPreviewList from "../../../components/Blog/BlogPreview";
import Layout from "../../../components/Layout/Layout";
import { fakeUserData } from "../../../consts/consts";
import { useUser } from "../../../utils/hooks/useUser";
import serverSideSessionReq from "../../../utils/requests/serverSideSessionReq";
import UserNavbar from "../../../widgets/UserNavBar/UserNavbar";

type Props = {
  userData: any;
};

export default function blogs({ userData }: Props) {
  const userEmail = userData?.email;

  return (
    <Layout userEmail={userEmail}>
      <UserNavbar />

      <BlogPreviewList blogs={fakeUserData.posts}></BlogPreviewList>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData = await serverSideSessionReq(context);
  return { props: { userData } };
};
