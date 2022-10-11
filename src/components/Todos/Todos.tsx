import { ITodo } from "../../interfaces/ITodo";
import Todo from "./Todo/Todo";

interface ITodosProps {
  todosData: ITodo[];
}

export default function Todos({ todosData }: ITodosProps) {
  return (
    <>
      {todosData.map((todoData) => (
        <Todo key={todoData.id} todoData={todoData} />
      ))}
    </>
  );
}
