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
