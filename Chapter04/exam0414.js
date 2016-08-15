/**
 * Created by candyimg on 2016. 8. 15..
 */

// My function() 함수 정의
function myFunction() {
    return true;
}

console.dir(myFunction.prototype);  // constructor와 __proto__를 가진 Object
console.dir(myFunction.prototype.constructor);  // myFunction() 함수를 가리킴

