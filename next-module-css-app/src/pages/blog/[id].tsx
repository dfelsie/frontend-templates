import React, { useEffect, useState } from "react";
import localStyles from "./blog.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import serverSideSessionReq from "../../utils/requests/serverSideSessionReq";
import { GetServerSideProps } from "next/types";
import { backendRoute } from "../../consts/consts";
import makeFetch from "../../utils/makeFetch";
import { Blog as BlogType } from "../../types/Blog";
import BlogView from "../../components/Blog/BlogView";
import Layout from "../../components/Layout/Layout";
import colors from "../../consts/colorConsts";
type Props = {
  userData: any;
  blog: BlogType;
};
export default function Blog({ userData, blog }: Props) {
  const userEmail = userData?.email;
  return (
    <Layout color={"white"} userEmail={userEmail}>
      <BlogView blog={blog} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData = await serverSideSessionReq(context);
  const blogId = context.params.id;
  const blogData = (await makeFetch(`${backendRoute}/data/getblog/${blogId}`)())
    ?.data?.blog;
  if (!blogData) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const blog = blogData as BlogType;
  if (!blog) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { userData, blog } };
};
