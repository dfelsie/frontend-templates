import { backendRoute } from "../../consts/consts";
import makeFetch from "../makeFetch";

const sessionReq = makeFetch(backendRoute + "/auth/user");
export default sessionReq;
