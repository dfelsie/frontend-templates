import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout/Layout";
import ProfileBody from "../../components/Profile/ProfileBody";
import ProfileCard from "../../components/Profile/ProfileCard";
import colors from "../../consts/colorConsts";
import getProfData from "../../utils/requests/getProfData";
import serverSideSessionReq from "../../utils/requests/serverSideSessionReq";

type Props = {
  userData: any;
  profData: any;
};

export default function Profile({ userData, profData }: Props) {
  const router = useRouter();
  const userEmail = userData?.email;
  const userId = userData?.userId;
  const { name, followers, follows, blogs } = profData;
  let currUserDoesFollow = false;
  console.log(followers);

  for (let i = 0; i < followers.length; i++) {
    if (followers[i]?.follower?.email === userEmail) {
      currUserDoesFollow = true;
      break;
    }
  }

  return (
    <Layout color={colors.champagne} userEmail={userEmail}>
      <ProfileBody
        userName={name}
        blogs={blogs}
        followers={followers}
        follows={follows}
        userId={userId}
        currUserDoesFollow={currUserDoesFollow}
      />
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData = await serverSideSessionReq(context);

  const profData = (await getProfData(context.query.id as string))?.data;
  if (!profData?.name) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: { userData, profData } };
};
