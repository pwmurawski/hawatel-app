import AddUsersForm from "../../components/AddUsers/AddUsersForm";
import Pagination from "../../components/Pagination/Pagination";
import Users from "../../components/Users/Users";
import useUsersData from "../../hooks/useUsersData";

export default function UsersPage() {
  const [usersData, page, setPage] = useUsersData();

  if (!usersData) return null;
  return (
    <>
      <AddUsersForm />
      <Pagination
        page={page}
        pages={usersData.meta.pagination.pages}
        setPage={setPage}
      >
        <Users usersData={usersData.data} />
      </Pagination>
    </>
  );
}
