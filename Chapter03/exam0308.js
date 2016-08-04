/**
 * Created by tony on 2016. 8. 4..
 */

var foo = {
    name: 'foo',
    age: 30,
    major: 'computer science'
};


var prop;
for (prop in foo) {
    console.log(prop, foo[prop]);
}


var foo = {
    name: 'foo',
    nickname: 'babo'
}

console.log(foo.nickname);
delete foo.nickname;
console.log(foo.nickname);


delete foo;
console.log(foo.name);