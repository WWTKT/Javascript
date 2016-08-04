/**
 * Created by tony on 2016. 8. 4..
 */

var foo = {
    name : 'foo',
    major : 'computer science'
}

console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);


foo.major = 'electronics engineering';
console.log(foo.major);
console.log(foo['major']);

foo.age = 30;
console.log(foo.age);

foo['full-name'] = 'foo bar';
console.log(foo['full-name']);
console.log(foo.full-name);
console.log(foo.full);
console.log(name);