import { backendRoute, stdHeader } from "../../consts/consts";

export default async function postComment(text: string) {
  {
    return await fetch(backendRoute + "/data/addblog", {
      method: "POST",
      body: JSON.stringify({ text: text }),
      ...stdHeader,
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  }
}
