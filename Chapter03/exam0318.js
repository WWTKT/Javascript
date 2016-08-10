/**
 * Created by tony on 2016. 8. 5..
 */

var colorsArray = ['orange', 'yellow', 'green'];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

var colorsObj = {
    '0':'orange',
    '1':'yellow',
    '2':'green'
};


console.log(colorsObj[0]);
console.log(colorsObj[1]);
console.log(colorsObj[2]);

console.log(typeof colorsArray);
console.log(typeof colorsObj);

console.log(colorsArray.length);
console.log(colorsObj.length);

colorsArray.push('red');
colorsObj.push('red');