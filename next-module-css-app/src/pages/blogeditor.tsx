import { GetServerSideProps } from "next";
import React from "react";
import BlogPreviewList from "../components/Blog/BlogPreview";
import BlogEditor from "../components/BlogEditor/BlogEditor";
import Layout from "../components/Layout/Layout";
import { fakeUserData } from "../consts/consts";
import getServerSideSessionReq from "../utils/requests/getServerSideSessionReq";
import UserNavbar from "../widgets/UserNavBar/UserNavbar";

type Props = {
  userData: any;
};

export default function blogeditor({ userData }: Props) {
  const userEmail = userData?.email;

  return (
    <Layout userEmail={userEmail}>
      <BlogEditor />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData = await getServerSideSessionReq(context);
  console.log(userData, "Ud");
  if (!userData?.email) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: { userData } };
};
