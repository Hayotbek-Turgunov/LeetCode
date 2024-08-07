/**You are given positive integers n and m.

Define two integers, num1 and num2, as follows:

num1: The sum of all integers in the range [1, n] that are not divisible by m.
num2: The sum of all integers in the range [1, n] that are divisible by m.
Return the integer num1 - num2. */

/**Example 1:

Input: n = 10, m = 3
Output: 19
Explanation: In the given example:
- Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
- Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
We return 37 - 18 = 19 as the answer. */

/**Runtime 50 ms
Beats 95.60%

Memory 49.69 MB
Beats 61.24%
 */

var differenceOfSums = function (n, m) {
  let sum = 0;
  let numSum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      sum += i;
    } else {
      numSum += i;
    }
  }
  return numSum - sum;
};

differenceOfSums(5, 6);
