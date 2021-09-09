/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {

  const result = [];
  const stringArray = str.split("");

  stringArray.forEach((item, index) => {
    const letterBlock = [];
    console.log('item', item);
      for (var i = 0; i < index+1; i++) {
        letterBlock.push(i === 0 ? item.toUpperCase() : item.toLowerCase());
      }
    result.push(letterBlock.join(''));
    console.log(result);
  });
  return result.join('-');
}
