import { useContext, useEffect } from "react";
import GlobalReducerContext from "../../context/GlobalReducerContext";
import getPostComments from "../../helpers/getPostComments";

import Comment from "./Comment/Comment";

interface ICommentsProps {
  postId: number;
}

export default function PostComments({ postId }: ICommentsProps) {
  const reducer = useContext(GlobalReducerContext);

  const getPostCommentsData = async () => {
    const res = await getPostComments(postId);
    if (res)
      reducer?.dispatch({
        type: "addCommentsData",
        commentsData: { [postId]: res },
      });
  };

  useEffect(() => {
    getPostCommentsData();
  }, []);

  if (!reducer?.state.commentsData) return null;
  return (
    <>
      {(reducer.state.commentsData[postId] ?? { data: [] }).data.map(
        (commentData) => (
          <Comment key={commentData.id} commentData={commentData} />
        )
      )}
    </>
  );
}
