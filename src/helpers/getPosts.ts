import { IPosts } from "../interfaces/IPosts";
import apiGoRest from "./api/apiGoRest";

const getPosts = async (page: number) => {
  const res = await apiGoRest<IPosts>(`/posts?page=${page}`);

  return res;
};

export default getPosts;
