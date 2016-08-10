/**
 * Created by tony on 2016. 8. 10..
 */

console.log(!!0);   // false
console.log(!!1);   // true
console.log(!!'string');    // true
console.log(!!'');          // false
console.log(!!true);        // true
console.log(!!false);       // false
console.log(!!null);        // false
console.log(!!undefined);   // false
console.log(!!{});          // true
console.log(!![1,2,3]);     // true
