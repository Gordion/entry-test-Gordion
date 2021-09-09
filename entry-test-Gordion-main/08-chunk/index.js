// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
  let myArray = [];
 for(var i = 0; i < arr.length; i += size) {
   myArray.push(arr.slice(i, i+size));
 }
 return myArray;
};
