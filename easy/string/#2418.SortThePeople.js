/**You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights. */

/**Example 1:

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John. */

/**Example 2:

Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob. */

/**Runtime 71 ms
Beats 65.66%

Memory 55.39 MB
Beats 27.96% */

var sortPeople = function (names, heights) {
  let array = [];
  let returne = [];
  for (let i = 0; i < names.length; i++) {
    array.push([names[i], heights[i]]);
  }
  array.sort((a, b) => b[1] - a[1]);
  for (const arr of array) {
    returne.push(arr[0]);
  }
  return returne;
};

sortPeople(["Mary", "John", "Emma"], [180, 165, 170]);
