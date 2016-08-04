var objA = {
    val: 40
}

var objB = objA;

console.log(objA.val);
console.log(objB.val);

objB.val = 50;

console.log(objA.val);
console.log(objB.val);
