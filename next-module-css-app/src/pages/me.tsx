import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout/Layout";
import ProfileCard from "../components/Profile/ProfileCard";

type Props = {};

export default function Me({}: Props) {
  const router = useRouter();
  return (
    <Layout>
      <ProfileCard />
    </Layout>
  );
}
