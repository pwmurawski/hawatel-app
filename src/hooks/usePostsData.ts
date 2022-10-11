import { useContext, useEffect, useState } from "react";
import GlobalReducerContext from "../context/GlobalReducerContext";
import getPosts from "../helpers/getPosts";
import { IPosts } from "../interfaces/IPosts";

const usePostsData = (): [
  data: IPosts | undefined,
  page: typeof page,
  setPage: typeof setPage
] => {
  const reducer = useContext(GlobalReducerContext);
  const [page, setPage] = useState(
    reducer?.state.postsData?.meta.pagination.page ?? 1
  );

  const getData = async () => {
    const res = await getPosts(page);
    reducer?.dispatch({ type: "setPostsData", postsData: res });
  };

  useEffect(() => {
    if (page !== reducer?.state.postsData?.meta.pagination.page) getData();
    window.scrollTo(0, 0);
  }, [page]);

  return [reducer?.state.postsData, page, setPage];
};

export default usePostsData;
