/**
 * Created by tony on 2016. 8. 5..
 */

var arr = ['zero', 'one', 'two', 'three'];
delete arr[2];

console.log(arr);
console.log(arr.length);

for(var prop in arr) {
    console.log(prop, arr[prop]);
}
