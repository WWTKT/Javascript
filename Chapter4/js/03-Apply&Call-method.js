/**
 * Created by itskooh on 2016. 8. 23..
 */

/*
 *  1. apply()를 통한 명시적인 this 바인딩
 */
// 함수 선언
function Person1 ( name, age, gender ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// 빈 객체 생성
var foo = {};

// this로 foo객체 전달
Person1.apply ( foo, ['kenny', 23, 'man'] );

console.dir ( foo );    // foo 객체에 name, age, gender 프러퍼티가 생김


/*
 *  2. apply() 메서드를 활용한 arguments 객체의 배열 표준 메서드 활용
 */
// 함수 선언
function myFunction1() {
    console.dir(arguments);     // 유사배열객체

    // arguments.shift();       // 에러 발생

    var args = Array.prototype.slice.apply(arguments);
    console.dir ( args );       // 배열객체
}

myFunction1 ( 1, 2, 3 );