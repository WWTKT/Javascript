/**
 * Created by itskooh on 2016. 8. 23..
 */
/*
 * 1. prototype 프로퍼티와 [[Prototype]] 링크
 */
// 함수 선언
function Person1 ( name ) {
    this.name = name;
}

// 객체 생성
var foo = new Person1 ( 'foo' );

console.dir ( Person1 );		// prototype 프로퍼티가 Person.prototype을 가리키는 함수객체
console.dir ( foo );		    // Person.prototype을 [[Protype 링크]]로 갖는 개체



/*
 * 2. 객체 리터럴 방식으로 생성된 객체의 프로토타입 체이닝
 */
// 객체 리터럴
var myObject = {
    name : 'foo'
    , sayName : function () {
        console.log ( 'My Name is ' + this.name );
    }
};

myObject.sayName();											// foo
console.log ( myObject.hasOwnProperty ( 'name' ) );			// true, 에러 안남
console.log ( myObject.hasOwnProperty ( 'nickname' ) );		// false, 에러 안남
myObject.sayNickName();										// 에러



/*
 * 3. 생성자 함수로 생성된 객체의 프로토타입 체이닝
 */
// 함수 선언
function Person2 ( name, age, gender ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// foo 객체 생성
var foo = new Person2 ( 'foo', 30, 'man' );

console.log ( foo.hasOwnProperty ( 'name' ) );		// true, foo --> Person2.prototype --> Object.prototype 프로토타입 체이닝 발생
console.dir ( Person2.prototype );



/*
 * 4. 기본 데이터타입 확장
 */
// testMethod 메서드 추가
String.prototype.testMethod = function () {
    console.log ( 'This is testMethod()' );
};

var str = 'this is test';
str.testMethod();					// This is testMethod()

console.dir ( String.prototype );	// testMethod 프로퍼티가 있는 String.prototype



/*
 * 5. 프토토타입도 자바스크립트 객체다.
 */
// 함수 선언
function Person3 ( name ) {
    this.name = name;
}

// foo 객체 생성
var foo = new Person3 ( 'foo' );

// foo.sayHello();					// 에러

Person3.prototype.sayHello = function() {
    console.log ( 'Hello' );
};

foo.sayHello();						// Hello



/*
 * 6. 프로토타입 메서드의 this 바인딩
 */
// 함수 선언
function Person4 ( name ) {
    this.name = name;
}

Person4.prototype.getName = function () {
    return this.name;
};

var foo = new Person4 ( 'foo' );				// 프로토타입 체이닝 : foo --> Person4.prototype --> Object.prototype
console.log ( foo.getName() );					// foo

Person4.prototype.name = 'person4';
console.log ( Person4.prototype.getName() );	// person4



/*
 * 7. 디폴트 프로토타입은 다른 객체로 변경이 가능하다
 */
// 함수 생성
function Person5 ( name ) {
    this.name = name;
}

console.log ( Person5.prototype.constructor );			// function Person5를 가리킴

// foo 객체 생성
var foo = new Person5 ( 'foo' );
console.log ( foo.country );							// undefined

// 디폴트 프로토타입 변경
Person5.prototype = {
    country : 'korea'
};
console.log ( Person5.prototype.constructor );			// 생성된 객체(Object)를 가리킴

// bar 객체 생성
var bar = new Person5 ( 'bar' );
console.log ( foo.country );							// undefined
console.log ( bar.country );							// korea
console.log ( foo.constructor );						// Person5
console.log ( bar.constructor );						// Object



/*
 * 8. 객체의 프로퍼티 읽기나 메서드를 실행할 때만 프로토타입 체이닝이 동작한다
 */
// 함수 선언
function Person6 ( name ) {
    this.name = name;
}

Person6.prototype.country = 'korea';

var foo = new Person6 ( 'foo' );
var bar = new Person6 ( 'bar' );

console.log ( foo.country );			// korea
console.log ( bar.country );			// korea

foo.country = 'USA';					// 프로퍼티 동적 생성

console.log ( foo.country );			// USA
console.log ( bar.country );			// korea