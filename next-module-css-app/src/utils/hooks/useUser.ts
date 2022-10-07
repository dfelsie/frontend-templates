import useSWR from "swr";
import { backendRoute } from "../../consts/consts";
import makeFetch, { makeFetchNoUrl as makeFetchTakesUrl } from "../makeFetch";
import getSessionReq from "../requests/getSessionReq";
export const fetcher = (url) => fetch(url).then((r) => r.json());

export function useUser() {
  const userFetch = makeFetchTakesUrl();
  const { data, mutate } = useSWR(backendRoute + "/auth/user", userFetch);
  // if data is not defined, the query has not completed
  const loading = !data;
  const user = data;
  console.log("useUser:", user);
  return [user, { mutate, loading }];
}
