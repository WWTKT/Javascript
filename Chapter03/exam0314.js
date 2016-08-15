/**
 * Created by tony on 2016. 8. 4..
 */
var emptyArr = [];
console.log(emptyArr[0]);   // undefined


emptyArr[0] = 100;
emptyArr[1] = undefined;
emptyArr[3] = 'eight';
emptyArr[7] = true;

console.log(emptyArr);      // Array[8]
console.log(emptyArr.length);   // 8


var arr;
for( arr in emptyArr) {
    console.log(emptyArr[arr]); // 100 -> undefined -> eight -> true
}
