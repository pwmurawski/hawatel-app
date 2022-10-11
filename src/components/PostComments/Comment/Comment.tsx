/* eslint-disable camelcase */
import { IComment } from "../../../interfaces/IComment";
import { Container, Body, Email, Id, Name, PostId } from "./styles/styles";

interface ICommentProps {
  commentData: IComment;
}

export default function Comment({
  commentData: { body, email, id, name, post_id },
}: ICommentProps) {
  return (
    <Container>
      <Id>{id}</Id>
      <PostId>{post_id}</PostId>
      <Name>{name}</Name>
      <Body>{body}</Body>
      <Email>{email}</Email>
    </Container>
  );
}
