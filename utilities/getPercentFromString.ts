const getPercentFromString = (str: string) =>
  parseInt((str.match(/(.*)%/) ?? ["", "0"])[1], 10);

export default getPercentFromString;
