import { backendRoute, stdHeader } from "../../consts/consts";

export default async function getProfData(profId: string) {
  {
    return await fetch(`${backendRoute}/data/useroverview/${profId}`, {
      method: "GET",
      ...stdHeader,
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  }
}
