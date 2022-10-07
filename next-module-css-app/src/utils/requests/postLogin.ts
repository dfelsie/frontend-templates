import { backendRoute, stdHeader } from "../../consts/consts";

export default async function postLogin(email: string, password: string) {
  {
    return await fetch(backendRoute + "/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      ...stdHeader,
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  }
}
