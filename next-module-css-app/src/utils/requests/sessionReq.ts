import { backendRoute, stdHeader } from "../../consts/consts";

export default async function sessionReq() {
  {
    return await fetch(backendRoute + "/auth/user", {
      method: "GET",
      ...stdHeader,
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  }
}
