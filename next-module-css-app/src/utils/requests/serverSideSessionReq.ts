import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import { backendRoute } from "../../consts/consts";
import { makeFetchWithCookie } from "../makeFetch";

export default async function serverSideSessionReq(
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  //Hacky way to get redis session id and set it on request
  const sessionReq = makeFetchWithCookie(
    backendRoute + "/auth/user",
    `connect.sid=${context.req.cookies["connect.sid"]}`
  );
  const userData = await sessionReq();
  return userData;
}
