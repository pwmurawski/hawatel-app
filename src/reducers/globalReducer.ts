import { ActionType, IState } from "../interfaces/IGlobalReducer";

export const globalReducer = (state: IState, action: ActionType) => {
  switch (action.type) {
    case "setUsersData":
      return { ...state, usersData: action.usersData };

    case "setPostsData":
      return { ...state, postsData: action.postsData };

    case "addCommentsData":
      return {
        ...state,
        commentsData: { ...state.commentsData, ...action.commentsData },
      };

    case "setTodosData":
      return { ...state, todosData: action.todosData };

    default:
      throw new Error("There is no such action");
  }
};

export const initialState: IState = {
  usersData: undefined,
  postsData: undefined,
  commentsData: undefined,
  todosData: undefined,
};
