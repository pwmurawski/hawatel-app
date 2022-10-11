/* eslint-disable camelcase */
import { ReactElement } from "react";
import { IPost } from "../../../interfaces/IPost";
import { Container, Body, Id, Title, UserId } from "./styles/styles";

interface IPostProps {
  postData: IPost;
  children: ReactElement;
}

export default function Post({
  postData: { body, id, title, user_id },
  children,
}: IPostProps) {
  return (
    <Container>
      <Id>{id}</Id>
      <UserId>{user_id}</UserId>
      <Title>{title}</Title>
      <Body>{body}</Body>
      {children}
    </Container>
  );
}
