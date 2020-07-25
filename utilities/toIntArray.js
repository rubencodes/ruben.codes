import queryStringValueToArray from "./queryStringValueToArray";
import normalizeNumericalArray from "./normalizeNumericalArray";

const toIntArray = (val) => {
  if (!val) {
    return [];
  }

  return normalizeNumericalArray(queryStringValueToArray(val));
};

export default toIntArray;
