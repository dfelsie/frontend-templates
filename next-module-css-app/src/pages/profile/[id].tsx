import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout/Layout";
import ProfileCard from "../../components/Profile/ProfileCard";

type Props = {};

export default function Profile({}: Props) {
  const router = useRouter();
  return (
    <Layout userEmail={user}>
      <ProfileCard />
    </Layout>
  );
}
