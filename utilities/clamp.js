const clamp = (value, { min = value, max = value } = {}) =>
  Math.min(Math.max(value, min), max);

export default clamp;
