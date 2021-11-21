const toIntOrNull = (val: unknown) => {
  return val && typeof val === "string" && !Number.isNaN(parseInt(val, 10))
    ? parseInt(val, 10)
    : null;
};

export default toIntOrNull;
