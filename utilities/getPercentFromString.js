const getPercentFromString = (str) => parseInt(str.match(/(.*)%/)[1], 10);

export default getPercentFromString;
