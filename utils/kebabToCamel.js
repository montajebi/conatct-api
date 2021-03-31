const convertKebabToCamelString = (string) => {
  let str = string;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-') {
      const toReplace = `${str[i]}${str[i + 1]}`;
      const replaceChar = str[i + 1].toLocaleUpperCase();
      str = str.replace(toReplace, replaceChar);
    }
  }

  return str;
};

const convertKebabToCamelObject = (object) => {
  const tempObject = {};
  for (const key in object) {
    tempObject[convertKebabToCamelString(key)] = object[key];
  }
  return tempObject;
};

module.exports = convertKebabToCamelObject;
