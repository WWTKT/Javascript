/**
 * Created by candyimg on 2016. 8. 15..
 */

// 함수를 리턴하는 foo() 함수 정의
var foo = function () {
    return function () {
        console.log('this function is the return value.');
    };
};

foo();      // 아무 값도 출력되지 않음
var bar = foo();
bar();      // this function is the return value.