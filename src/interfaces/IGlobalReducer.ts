import { IComments } from "./IComments";
import { IPosts } from "./IPosts";
import { ITodos } from "./ITodos";
import { IUsers } from "./IUsers";

interface ISetUsersData {
  type: "setUsersData";
  usersData: IUsers | undefined;
}

interface ISetPostsData {
  type: "setPostsData";
  postsData: IPosts | undefined;
}

interface IAddCommentData {
  type: "addCommentsData";
  commentsData: { [x: number]: IComments } | undefined;
}

interface ISetTodosData {
  type: "setTodosData";
  todosData: ITodos | undefined;
}

export interface IState {
  usersData: IUsers | undefined;
  postsData: IPosts | undefined;
  commentsData: { [x: number]: IComments } | undefined;
  todosData: ITodos | undefined;
}

export type ActionType =
  | ISetUsersData
  | ISetPostsData
  | IAddCommentData
  | ISetTodosData;
