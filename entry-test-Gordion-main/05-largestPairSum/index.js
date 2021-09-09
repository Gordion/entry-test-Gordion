/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
  let first, second;
        if (numbers[0] > numbers[1])
        {
            first = numbers[0];
            second = numbers[1];
        }
        else
        {
            first = numbers[1];
            second = numbers[0];
        }

        for (let i = 2; i < numbers.length; i ++)
        {

            if (numbers[i] > first)
            {
                second = first;
                first = numbers[i];
            }
            else if (numbers[i] > second &&
                     numbers[i] != first)
                second = numbers[i];
        }
        return (first + second);
}
