import { IUser } from "../interfaces/IUser";
import apiGoRest from "./api/apiGoRest";

const postUsers = async (data: Omit<IUser, "id">) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const res = await apiGoRest<any>("/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });

  return res;
};

export default postUsers;
