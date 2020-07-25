import fetch from "isomorphic-unfetch";

const fetchConfig = async (url) => {
  console.log(url);
  // Fetch data from external API
  const res = await fetch(url);
  return res.json();
};

export default fetchConfig;
