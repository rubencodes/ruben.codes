export const isNotNull = <Value>(val: Value | null): val is Value =>
  val !== null;
