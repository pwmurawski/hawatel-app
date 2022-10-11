import AddPostsForm from "../../components/AddPostsForm/AddPostsForm";
import Pagination from "../../components/Pagination/Pagination";
import Posts from "../../components/Posts/Posts";
import usePostsData from "../../hooks/usePostsData";

export default function PostsPage() {
  const [postsData, page, setPage] = usePostsData();

  if (!postsData) return null;
  return (
    <>
      <AddPostsForm />
      <Pagination
        page={page}
        pages={postsData.meta.pagination.pages}
        setPage={setPage}
      >
        <Posts postsData={postsData.data} />
      </Pagination>
    </>
  );
}
