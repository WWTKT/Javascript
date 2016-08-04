/**
 * Created by tony on 2016. 8. 4..
 */

var a = 100;
var b = 100;

var objA = {value: 100};
var objB = {value: 100};
var objC = objB;

console.log( a == b );
console.log(objA == objB);
console.log(objB == objC);