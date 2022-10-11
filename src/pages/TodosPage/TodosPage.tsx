import Pagination from "../../components/Pagination/Pagination";
import Todos from "../../components/Todos/Todos";
import useTodosData from "../../hooks/useTodosData";

export default function TodosPage() {
  const [todosData, page, setPage] = useTodosData();

  if (!todosData) return null;
  return (
    <Pagination
      page={page}
      setPage={setPage}
      pages={todosData.meta.pagination.pages}
    >
      <Todos todosData={todosData.data} />
    </Pagination>
  );
}
