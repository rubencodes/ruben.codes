const queryStringValueToArray = (val: string | string[]) => {
  // Array type, e.g. blah=0&blah=2&blah=3
  if (Array.isArray(val)) {
    return val;
  }

  // Range type, e.g. blah=0...69.
  if (typeof val === "string" && val.includes("...")) {
    const [rangeStart, rangeEnd] = val.split("...");
    const rangeSize = parseInt(rangeEnd, 10) - parseInt(rangeStart, 10);
    return [...new Array(rangeSize + 1)].map(
      (_, index) => index + parseInt(rangeStart, 10),
    );
  }

  // Comma-delimited type, e.g. blah=0,1,2,3
  if (typeof val === "string" && val.includes(",")) {
    return val.split(",");
  }

  return [val];
};

export default queryStringValueToArray;
