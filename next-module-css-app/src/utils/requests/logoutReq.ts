import { backendRoute, stdHeader } from "../../consts/consts";

export default async function logoutReq() {
  {
    return await fetch(backendRoute + "/auth/logout", {
      method: "GET",
      ...stdHeader,
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  }
}
