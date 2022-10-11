import { IUsers } from "../interfaces/IUsers";
import apiGoRest from "./api/apiGoRest";

const getUsers = async (page: number) => {
  const res = await apiGoRest<IUsers>(`/users?page=${page}`);

  return res;
};

export default getUsers;
