import { ITodos } from "../interfaces/ITodos";
import apiGoRest from "./api/apiGoRest";

const getTodos = async (page: number) => {
  const res = await apiGoRest<ITodos>(`/todos?page=${page}`);

  return res;
};

export default getTodos;
