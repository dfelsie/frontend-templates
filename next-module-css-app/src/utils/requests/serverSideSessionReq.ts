import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import { backendRoute, stdHeader } from "../../consts/consts";
import { makeFetchWithCookie } from "../makeFetch";

export default async function serverSideSessionReq(
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  //Hacky way to get redis session id and set it on request
  /*   const sessionReq = makeFetchWithCookie(
    backendRoute + "/auth/user",
    `connect.sid=${context.req.cookies["connect.sid"]}`
  );
  const userData = await sessionReq();
  return userData; */
  return await fetch(`${backendRoute}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `connect.sid=${context.req.cookies["connect.sid"]}`,
    },
    referrerPolicy: "no-referrer",
    credentials: "include",
  })
    .then((r) => r.json())
    .catch((err) => console.error(err));
}
