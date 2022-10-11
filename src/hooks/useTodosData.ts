import { useContext, useEffect, useState } from "react";
import GlobalReducerContext from "../context/GlobalReducerContext";
import getTodos from "../helpers/getTodos";
import { ITodos } from "../interfaces/ITodos";

const useTodosData = (): [
  data: ITodos | undefined,
  page: typeof page,
  setPage: typeof setPage
] => {
  const reducer = useContext(GlobalReducerContext);
  const [page, setPage] = useState(
    reducer?.state.todosData?.meta.pagination.page ?? 1
  );

  const getData = async () => {
    const res = await getTodos(page);
    reducer?.dispatch({ type: "setTodosData", todosData: res });
  };

  useEffect(() => {
    if (page !== reducer?.state.todosData?.meta.pagination.page) getData();
    window.scrollTo(0, 0);
  }, [page]);

  return [reducer?.state.todosData, page, setPage];
};

export default useTodosData;
