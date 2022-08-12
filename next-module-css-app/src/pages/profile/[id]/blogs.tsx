import React from "react";
import BlogPreview from "../../../components/Blog/BlogPreview";
import Layout from "../../../components/Layout/Layout";
import { fakeUserData } from "../../../consts/consts";
import { useUser } from "../../../utils/hooks/useUser";
import UserNavbar from "../../../widgets/UserNavBar/UserNavbar";

type Props = {};

export default function blogs({}: Props) {
  const [user, { mutate }] = useUser();

  return (
    <Layout userEmail={user}>
      <UserNavbar />

      <BlogPreview blogs={fakeUserData.posts}></BlogPreview>
    </Layout>
  );
}
