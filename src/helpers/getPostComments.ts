import { IComments } from "../interfaces/IComments";
import apiGoRest from "./api/apiGoRest";

const getPostComments = async (postId: number) => {
  const res = await apiGoRest<IComments>(`/posts/${postId}/comments`);
  return res;
};

export default getPostComments;
