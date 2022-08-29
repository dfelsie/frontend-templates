import { backendRoute, stdHeader } from "../../consts/consts";

export default async function registerReq(
  email: string,
  password: string,
  name: string
) {
  {
    return await fetch(backendRoute + "/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      ...stdHeader,
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  }
}
