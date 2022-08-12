import React from "react";
import Follows from "../../../components/Follows/Follows";
import Layout from "../../../components/Layout/Layout";
import { fakeUserData } from "../../../consts/consts";
import { useUser } from "../../../utils/hooks/useUser";

type Props = {};

export default function following({}: Props) {
  const [user, { mutate }] = useUser();

  return (
    <Layout userEmail={user}>
      <Follows followList={fakeUserData.followers} />
    </Layout>
  );
}
