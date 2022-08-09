import React from "react";
import BlogPreview from "../../../components/Blog/BlogPreview";
import Layout from "../../../components/Layout/Layout";
import { fakeUserData } from "../../../consts/consts";

type Props = {};

export default function blogs({}: Props) {
  return (
    <Layout>
      <BlogPreview blogs={fakeUserData.posts}></BlogPreview>
    </Layout>
  );
}
