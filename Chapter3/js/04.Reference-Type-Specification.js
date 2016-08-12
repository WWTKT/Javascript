/**
 * Created by kenny.k on 2016. 8. 9..
 */

/*
 * 참조타입의 특성
 *     - 모든 연산이 실제 값이 아닌 참조값으로 처리됨
 */


/*
 * 참조변수
 *     - objA는 리터럴로 생성된 객체를 가리키는 참조값을 저장한다
 *     - objA 객체는 참조변수 objA가 가리키고 있는 객체
 */
console.log ( "__KENNY__ 참조변수");
var objA = {
    val : 40
};
var objB = objA;

console.log ( objA.val, objB.val );

objB.val = 50;
// objA와 objB는 같은 값을 참조하고 있음
console.log ( objA.val, objB.val );



/*
 * 객체 비교
 *     - 객체의 프로퍼티값을 비교하는것이 아니라, 참조값을 비교한다.
 */
console.log ( "__KENNY__ 객체 비교");
var a = 100;
var b = 100;

var objAA = { val : 100 };
var objBB = { val : 100 };
var objCC = objBB;

console.log ( a == b );
console.log ( objAA == objBB );
console.log ( objBB == objCC );
console.log ( objAA === objBB );
console.log ( objBB === objCC );


/*
 * Call by Reference
 *     - 기본타입이 함수의 매개변수로 전달되었을때 : Call by Value 방식
 *     - 참조타입이 함수의 매개변수로 전달되었을때 : Call by Reference 방식
 */
console.log ( "__KENNY__ Call by Reference");

var aaa = 100;
var objAAA = { val:100 };

function changeArgs ( aaa, objAAA ) {
    aaa = 200;
    objAAA.val = 200;
}

console.log ( aaa );
console.log ( objAAA );

changeArgs ( aaa, objAAA );

console.log ( aaa );
console.log ( objAAA );
