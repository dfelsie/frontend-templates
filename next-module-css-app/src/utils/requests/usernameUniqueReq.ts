import { backendRoute, stdHeader } from "../../consts/consts";

export default async function usernameUniqueReq(usernameToCheck: string) {
  {
    return await fetch(backendRoute + "/data/checkifnameunique", {
      method: "POST",
      body: JSON.stringify({ usernameToCheck }),
      ...stdHeader,
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  }
}
