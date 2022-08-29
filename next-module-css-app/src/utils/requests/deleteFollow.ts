import { backendRoute, stdHeader } from "../../consts/consts";

export default async function deleteFollow(username: string) {
  {
    return await fetch(`${backendRoute}/data/deletefollow/${username}`, {
      method: "DELETE",
      ...stdHeader,
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  }
}
