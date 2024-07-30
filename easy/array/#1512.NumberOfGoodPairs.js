/**Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

  */

/**Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed. */

/**
 *Runtime 47 ms
Beats 82.64

 *Memory 48.77 MB
Beats 60.96%

 *
 */

var numIdenticalPairs = function (nums) {
  const map = {};
  let count = 0;

  for (const number of nums) {
    if (map[number]) {
      count += map[number];
      map[number] += 1;
    } else {
      map[number] = 1;
    }
  }
  return count;
};

numIdenticalPairs([1, 2, 3, 1, 1, 3]);
