/* eslint-disable no-empty */
const apiGoRest = async <T>(url: string, options?: RequestInit) => {
  try {
    const baseUrl = process.env.REACT_APP_API_URL;

    const request = await fetch(`${baseUrl}${url}`, options);
    const res: T = await request.json();

    return res;
  } catch {}
  return undefined;
};

export default apiGoRest;
