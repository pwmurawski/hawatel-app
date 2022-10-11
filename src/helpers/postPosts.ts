import apiGoRest from "./api/apiGoRest";

interface IData {
  user_id: string;
  title: string;
  body: string;
}

const postPosts = async (data: IData) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const res = await apiGoRest<any>("/posts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });

  return res;
};

export default postPosts;
