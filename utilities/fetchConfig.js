import fetch from "isomorphic-unfetch";

const fetchConfig = async (url) => {
  // Fetch data from external API
  const res = await fetch(url, { mode: "cors" });
  return res.json();
};

export default fetchConfig;
