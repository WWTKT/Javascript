/**
 * Created by kenny.k on 2016. 8. 9..
 */

/*
 * 참조타입
 *     - 기본타입을 제외한 모든 값은 객체.
 *     - 객체는 'key:value'의 프로퍼티를 담는 컨테이너.
 *     - 객체의 프로퍼티는 기본타입과 객체를 모두 가리킬 수 있음.
 *     - 함수를 가리키는 객체의 프로퍼티는 '메서드'라 함.
 */


/*
 * 객체생성
 *     - 클래스의 개념 없음
 *     1) 기본 Object() 생성자 함수 사용.
 *     2) 객체 리터럴 사용.
 *     3) 생성자함수를 사용.
 */

// 1)
var foo1 = new Object();

foo1.name    = 'kenny';
foo1.age     = 32;
foo1.gender  = 'male';

console.log ( typeof foo1 );
console.log ( foo1 );



// 2)
var foo2 = {
      name      : 'kenny'
    , age       : 32
    , gender    : 'male'
};

console.log ( typeof foo2 );
console.log ( foo2 );


// 3) Chapter4 에서 다룸
