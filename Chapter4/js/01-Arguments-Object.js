/**
 * Created by kenny.k on 2016. 8. 16..
 */
/*
 * 1. 함수 호출시 함수 형식에 맞춰 호출하지 않아도 됨
 */
console.log ( "__KENNY__ 1. 함수 호출시 함수 형식에 맞춰 호출하지 않아도 됨");
function func ( arg1, arg2 ) {
    console.log ( arg1, arg2 );
}

func();         // undefined
func(1);        // 1 undefined
func(1,2);      // 1 2
func(1,2,3);    // 1 2


/*
 * 2. arguments 객체 확인
 */
console.log ( "__KENNY__ 2. arguments 객체 확인");
function add ( a, b ) {
    // 암묵적으로 함수 호출시 arguments 객체가 전달됨
    console.dir ( arguments );  // callee 프로퍼티 : 현재 실행중인 함수의 참조값( add() )
    return a + b;
}

console.log ( add(1) );         // NaN
console.log ( add(1,2) );       // 3
console.log ( add(1,2,3) );     // 3



/*
 * 3. arguments 객체의 활용
 */
console.log ( "__KENNY__ 3. arguments 객체의 활용");
// sum() 함수에 인자를 명시적으로 기술하지 않았음
function sum() {
    var result = 0;

    for ( var i = 0 ; i < arguments.length ; i++ ) {
        result += arguments[i];
    }

    return result;
}

console.log ( sum(1,2,3) );                 // 6
console.log ( sum(1,2,3,4,5,6,7,8,9) );     // 45
