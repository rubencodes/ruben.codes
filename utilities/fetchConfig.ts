import fetch from "isomorphic-unfetch";

const fetchConfig = async (url: string) => {
  // Fetch data from external API
  const res = await fetch(url, { mode: "cors" });
  return res.json();
};

export default fetchConfig;
