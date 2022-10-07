import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";
import ContextModal from "../widgets/AppWrapper/ContextModal";
import getServerSideSessionReq from "../utils/requests/getServerSideSessionReq";
import getSearchBlogTitles from "../utils/requests/getSearchBlogTitles";
import BlogList from "../components/BlogList/BlogList";
type Props = {
  userData: any;
  blogListData: any;
};

export default function blogresults({ userData, blogListData }: Props) {
  const userEmail = userData?.email;
  const blogListDataArray = blogListData.map((val) => {
    return {
      title: val?._source?.title,
      content: val?._source?.content,
      id: val?._source?.id,
    };
  });
  return (
    <Layout userEmail={userEmail}>
      <BlogList blogListData={blogListDataArray} />
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData = (await getServerSideSessionReq(context)) ?? null;
  console.log(context.query, " conQu");
  const query = context.query.q as string;
  const blogList = await getSearchBlogTitles(query);
  const blogListData = blogList?.data?.results?.hits?.hits ?? [];
  console.log(blogList?.data?.results?.hits?.hits);

  return { props: { userData, blogListData } };
};
