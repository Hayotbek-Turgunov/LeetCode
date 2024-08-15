/**Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
Return the resulting string.

  */

/**Example 1:

Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Explanation: The first occurrence of "d" is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd". */

/**Runtime
52 ms
Beats 58.84%

Memory 49.00 MB
Beats 56.42%
 */

var reversePrefix = function (word, ch) {
  let indexOfCh = word.indexOf(ch);
  let output = "";
  let len = word.length;

  if (indexOfCh < 0) {
    return word;
  }

  for (let i = indexOfCh; i >= 0; i--) {
    output += word[i];
  }

  for (let i = indexOfCh + 1; i < len; i++) {
    output += word[i];
  }

  return output;
};

reversePrefix("abcdefd", "d");
