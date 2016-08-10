/**
 * Created by tony on 2016. 8. 10..
 */
var arr = ['bar'];
var obj = {name: 'foo', length: 1};

arr.push('baz');
console.log(arr); // Array[2] -> ['bar', 'baz']

Array.prototype.push.apply(obj, ['baz']);
console.log(obj); // Object -> {1: 'baz', length:2, name:'foo'}