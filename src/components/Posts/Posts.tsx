import { IPost } from "../../interfaces/IPost";
import PostComments from "../PostComments/PostComments";
import Post from "./Post/Post";
import { Container } from "./styles";

interface IPostsProps {
  postsData: IPost[];
}

export default function Posts({ postsData }: IPostsProps) {
  return (
    <Container>
      {postsData.map((postData) => (
        <Post key={postData.id} postData={postData}>
          <PostComments postId={postData.id} />
        </Post>
      ))}
    </Container>
  );
}
