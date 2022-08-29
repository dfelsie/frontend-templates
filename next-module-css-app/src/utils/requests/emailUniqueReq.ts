import { backendRoute, stdHeader } from "../../consts/consts";

export default async function emailUniqueReq(emailToCheck: string) {
  {
    return await fetch(backendRoute + "/data/checkifemailunique", {
      method: "POST",
      body: JSON.stringify({ emailToCheck }),
      ...stdHeader,
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  }
}
