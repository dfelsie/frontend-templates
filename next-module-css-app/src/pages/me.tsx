import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";
import MyProfileCard from "../components/Profile/MyProfileCard";
import ProfileCard from "../components/Profile/ProfileCard";
import { backendRoute } from "../consts/consts";
import { useUser } from "../utils/hooks/useUser";
import makeFetch, { makeFetchWithCookie } from "../utils/makeFetch";
import sessionReq from "../utils/requests/sessionReq";

type Props = {
  userData: any;
};

export default function Me({ userData }: Props) {
  const router = useRouter();
  const [user, { mutate }] = useUser();
  const userEmail = userData?.body;
  console.log(userData, " ", user, " UD");
  let body;
  if (user) {
    body = <MyProfileCard userEmail={user} />;
  } else {
    body = <Home />;
  }

  return (
    <Layout userEmail={userEmail}>
      <MyProfileCard userEmail={userEmail} />
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  console.log("Cont", context.req.cookies);

  //const userData = await sessionReq();
  const sessionReq = makeFetchWithCookie(
    backendRoute + "/auth/user",
    `connect.sid=${context.req.cookies["connect.sid"]}`
  );
  const userData = await sessionReq();
  console.log(userData, "Ud");

  // Pass data to the page via props
  return { props: { userData } };
};
