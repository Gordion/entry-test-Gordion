/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
  const nmbspl = numbers.split(" ");
  const lowest = Math.min(...nmbspl);
  const highest = Math.max(...nmbspl);
  const result = lowest.toString() + " " + highest.toString();
  return result
}
