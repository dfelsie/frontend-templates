import { backendRoute, stdHeader } from "../../consts/consts";

export default async function addBlog(title: string, body: string) {
  {
    return await fetch(backendRoute + "/data/addblog", {
      method: "POST",
      body: JSON.stringify({ title: title, bodyText: body }),
      ...stdHeader,
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  }
}
