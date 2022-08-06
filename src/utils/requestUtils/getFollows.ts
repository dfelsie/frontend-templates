import axios from "../axios";

export default async function getFollows(userName: string) {
  const response = axios
    .get(`http://localhost:8000/api/v1/data/getfollows/${userName}`)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
  return response;
}
