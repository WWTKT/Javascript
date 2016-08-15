/**
 * Created by candyimg on 2016. 8. 14..
 */

// 함수 표현식으로 foo() 함수 생성
var foo = function (func) {
    func();
};

// foo() 함수 실행
foo(function () {
    console.log('Function can be used as the argument.');
});

// 결과 Function can be used as the argument.