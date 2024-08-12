/**You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string. */

/**Example 2:

Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position. */

/**Runtime
54 ms
Beats 80.20%

Memory 51.08 MB
Beats 20.71% */

var restoreString = function (s, indices) {
  let ar = new Array(indices.length);
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    ar[indices[i]] = s[i];
  }
  return ar.join("");
};

restoreString("abc", [0, 1, 2]);
