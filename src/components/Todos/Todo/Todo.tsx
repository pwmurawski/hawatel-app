/* eslint-disable camelcase */
import { ITodo } from "../../../interfaces/ITodo";
import { Container, DueOn, Id, Status, Title, UserId } from "./styles/styles";

interface ITodoProps {
  todoData: ITodo;
}

export default function Todo({
  todoData: { due_on, id, status, title, user_id },
}: ITodoProps) {
  return (
    <Container>
      <Id>{id}</Id>
      <UserId>{user_id}</UserId>
      <Title>{title}</Title>
      <DueOn>{due_on}</DueOn>
      <Status>{status}</Status>
    </Container>
  );
}
