import { backendRoute } from "../../consts/consts";
import makeFetch from "../makeFetch";

const addFollowReq = makeFetch(backendRoute + "/data/addfollow", "POST");

export default addFollowReq;
