export const getLastWordLength = str => {
  const wordsArray = str.trim().split(" ");
  return wordsArray[wordsArray.length -1].length;
};
