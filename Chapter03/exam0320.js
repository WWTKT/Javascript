/**
 * Created by tony on 2016. 8. 5..
 */

var arr = ['zero', 'one', 'two'];
console.log(arr.length);

arr.color = 'blue';
arr['name'] = 'number_array';
console.log(arr.length);

arr[3] = 'red';
console.log(arr.length);

console.dir(arr);


for(var prop in arr) {
    console.log(prop, arr[prop]);
}

for(var i = 0 ; i < arr.length ; i++ ) {
    console.log(i, arr[i]);
}