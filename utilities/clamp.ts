const clamp = (
  value: number,
  { min = value, max = value }: { min?: number; max?: number } = {},
) => Math.min(Math.max(value, min), max);

export default clamp;
