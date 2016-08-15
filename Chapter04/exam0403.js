/**
 * Created by candyimg on 2016. 8. 14..
 */

var add = function sum(x, y) {
    return x + y;
};

console.log(add(3,4));  // 7
console.log(sum(3,4));  // Uncaught ReferenceError: sum is not defined(…)
