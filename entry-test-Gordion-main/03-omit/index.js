/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const result = {...obj};
  fields.forEach((item, i) => {
    if (obj.hasOwnProperty(item)) {
      delete result[item];
    }
  });
  return result;
};

// const fruits = {
//  apple: 2,
//  orange: 4,
//  banana: 3
// };
//
// console.log(omit(fruits, 'apple', 'banana'));
