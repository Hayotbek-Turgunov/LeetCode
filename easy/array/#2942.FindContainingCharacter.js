/**You are given a 0-indexed array of strings words and a character x.

Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order.

 */

/**Example 1:

Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1. */

/**
 *Runtime 47 ms
Beats 72.64

 *Memory 48.77 MB
Beats 70.96%

 *
 */

var findWordsContaining = function (words, x) {
  arr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].split("").includes(x)) arr.push(i);
  }
  return arr;
};

findWordsContaining(["leet", "code"]);
