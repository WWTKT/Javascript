/**
 * Created by itskooh on 2016. 8. 23..
 */
/*
 * 1. 일반함수나 메서드는 리턴값을 지정하지 않을 경우, undefined 값이 리턴된다
 */
// 함수 리터럴
var noReturnFunc = function() {
    console.log ( 'This function has no return statement.' );
};

var result = noReturnFunc();
console.log ( result );         // undefined


/*
 * 2. 생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴된다
 */
// 객체를 리턴하는 함수
function Person1 ( name, age, gender ) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    return { name : 'bar', age : 20, gender : 'woman' };
}

var foo = new Person1 ( 'kenny', 23, 'man' );
console.dir ( foo );        // bar 객체


// 기본타입을 리턴하는 함수
function Person2 ( name, age, gender ) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    return 100;
}

var foo = new Person2 ( 'kenny', 23, 'man' );
console.dir ( foo );        // Person2 객체