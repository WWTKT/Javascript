/**
 * Created by kenny.k on 2016. 8. 9..
 */

/*
 * 객체 프로퍼티
 *     - 접근 표기법 : 대괄호 / .
 *     - 읽기, 갱신, 동적생성
 */

// 객체 리터럴 생성
console.log ( "__KENNY__ 객채 리터럴 생성");
var foo1 = {
      name  : 'kenny'
    , major : 'electronic engineering'
}

// 프로퍼티 읽기
console.log ( "__KENNY__ 프로퍼티 읽기");
console.log ( foo1.name );
console.log ( foo1['name'] );
console.log ( foo1.nickname );


// 프로퍼티 갱신
console.log ( "__KENNY__ 프로퍼티 갱신");
foo1.major = 'computer science';
console.log ( foo1.major );
console.log ( foo1['major']);


// 프로퍼티 동적생성
console.log ( "__KENNY__ 프로퍼티 동적생성");
foo1.age = 32;
console.log ( foo1.age );
console.log ( foo1 );


/*
 * 대괄호 표기법
 *     - 반드시 사용해야 하는 경우 : 표현식이거나 예약어일 경우
 *     - 주의사항
 *         1) 문자열형태('')로 접근해야 함
 *         2) 그렇지 않으면 내부적으로 toString() 메서드를 통해 올바르지 않은 값으로 접근됨
 */
console.log ( "__KENNY__ 대괄호 표기법");
foo1['full-name'] = 'kenny.k';
console.log ( foo1['full-name'] );
// console.log ( foo1[full-name] );
console.log ( foo1.full-name );
console.log ( foo1.full );


// 모든 프로퍼티 출력
console.log ( "__KENNY__ 모든 프로퍼티 출력");
var prop;
for ( prop in foo1 ) {
    console.log ( prop, foo1[prop] );
}


// 객체 프로퍼티 삭제
console.log ( "__KENNY__ 객체 프로퍼티 삭제");
console.log ( foo1.age );
delete foo1.age;
console.log ( foo1.age );