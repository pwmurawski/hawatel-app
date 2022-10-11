import { useContext, useEffect, useState } from "react";
import GlobalReducerContext from "../context/GlobalReducerContext";
import getUsers from "../helpers/getUsers";
import { IUsers } from "../interfaces/IUsers";

const useUsersData = (): [
  data: IUsers | undefined,
  page: typeof page,
  setPage: typeof setPage
] => {
  const reducer = useContext(GlobalReducerContext);
  const [page, setPage] = useState(
    reducer?.state.usersData?.meta.pagination.page ?? 1
  );

  const getData = async () => {
    const res = await getUsers(page);
    reducer?.dispatch({ type: "setUsersData", usersData: res });
  };

  useEffect(() => {
    if (page !== reducer?.state.usersData?.meta.pagination.page) getData();
    window.scrollTo(0, 0);
  }, [page]);

  return [reducer?.state.usersData, page, setPage];
};

export default useUsersData;
