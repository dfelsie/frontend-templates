import React from "react";
import BlogPreview from "../../../components/Blog/BlogPreview";
import Layout from "../../../components/Layout/Layout";
import { fakeUserData } from "../../../consts/consts";
import UserNavbar from "../../../widgets/UserNavBar/UserNavbar";

type Props = {};

export default function blogs({}: Props) {
  return (
    <Layout>
      <UserNavbar />

      <BlogPreview blogs={fakeUserData.posts}></BlogPreview>
    </Layout>
  );
}
