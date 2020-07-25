const toIntOrNull = (val) => {
  return val && !Number.isNaN(parseInt(val, 10)) ? parseInt(val, 10) : null;
};

export default toIntOrNull;
