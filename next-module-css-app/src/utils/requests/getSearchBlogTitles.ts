import { backendRoute, stdHeader } from "../../consts/consts";

export default async function getSearchBlogTitles(searchQuery: string) {
  {
    return await fetch(`${backendRoute}/search/blogtitle?q=${searchQuery}`, {
      method: "GET",
      ...stdHeader,
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  }
}
