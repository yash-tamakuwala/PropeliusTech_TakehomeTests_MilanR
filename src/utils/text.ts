export const titleCase = (str: string) => {
  const splittedStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splittedStr.length; i++) {
    splittedStr[i] =
      splittedStr[i].charAt(0).toUpperCase() + splittedStr[i].substring(1);
  }
  return splittedStr.join(" ");
};
