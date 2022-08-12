import { backendRoute } from "../../consts/consts";
import makeFetch from "../makeFetch";

const logoutReq = makeFetch(backendRoute + "/auth/logout");
export default logoutReq;
