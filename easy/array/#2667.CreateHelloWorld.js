/**Write a function createHelloWorld. It should return a new function that always returns "Hello World".*/

/**Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World" */

/**Runtime 49 ms
Beats 65.87%
 */

/**Memory 49.01 MB
Beats 5.31% */

var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

createHelloWorld([]);
