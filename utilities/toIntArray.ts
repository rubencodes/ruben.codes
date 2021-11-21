import queryStringValueToArray from "./queryStringValueToArray";
import normalizeNumericalArray from "./normalizeNumericalArray";

const toIntArray = (val: string | string[]) => {
  if (!val) {
    return [];
  }

  return normalizeNumericalArray(queryStringValueToArray(val));
};

export default toIntArray;
