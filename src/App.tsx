import { useMemo, useReducer } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import GlobalReducerContext from "./context/GlobalReducerContext";
import PostsPage from "./pages/PostsPage/PostsPage";
import TodosPage from "./pages/TodosPage/TodosPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import { globalReducer, initialState } from "./reducers/globalReducer";

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const reducerValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const header = <Header />;

  const content = (
    <Routes>
      <Route index path="*" element={<Navigate to="users" />} />
      <Route index path="/users" element={<UsersPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/todos" element={<TodosPage />} />
    </Routes>
  );

  return (
    <GlobalReducerContext.Provider value={reducerValue}>
      <Layout header={header} content={content} />
    </GlobalReducerContext.Provider>
  );
}

export default App;
