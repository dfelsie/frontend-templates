import { backendRoute, stdHeader } from "../../consts/consts";

export default async function getBlog(blogId: string) {
  {
    return await fetch(`${backendRoute}/data/getblog/${blogId}`, {
      method: "GET",
      ...stdHeader,
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  }
}
