const normalizeNumericalArray = (arr) => {
  return arr
    .map((i) => (typeof i === "string" ? parseInt(i, 10) : i))
    .filter((n) => !Number.isNaN(n));
};

export default normalizeNumericalArray;
