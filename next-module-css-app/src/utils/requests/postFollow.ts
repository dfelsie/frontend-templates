import { backendRoute, stdHeader } from "../../consts/consts";

export default async function postFollow(
  followerId: string,
  followingId: string,
  followingName: string
) {
  {
    return await fetch(backendRoute + "/data/addfollow", {
      method: "POST",
      body: JSON.stringify({ followerId, followingId, followingName }),
      ...stdHeader,
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  }
}
