/**
 * Created by kenny.k on 2016. 8. 9..
 */

/* --------------------------------------------------------------------------
 * -- 기본타입
 * -------------------------------------------------------------------------- */

/*
 * Number
 *     1) 모든숫자를 64비트 부동소수점 형태로 저장.
 *     2) 정수와 소수를 나누지 않으므로 나누셈연산시 주의해야함.
 */
var intNum      = 10;
var floatNum    = 0.1;

// 2)
var divied = 5 / 2;
console.log ( divied );
console.log ( Math.floor(divied) );




/*
 * String
 *     1) ' / '' 모두 사용 가능
 *     2) 한번정의된 문자열은 변하지 않음
 *         - 길이가 1인 문자열만 해당
 */
var singleQuoteStr  = 'single quote string';
var doubleQuoteStr  = "double quote string";
var singleChar      = 'a';

// 2)
var str = 'test';
console.log ( str[0], str[1], str[2], str[3]);
str[0] = 'T';
console.log ( str );
str = 'TEST';
console.log ( str );



/*
 * Boolean
 */
var boolVar = true;


/*
 * undefined
 *     - 값이 비어있음을 의미.
 *     - 디폴트값이 undefined 이며, undefined는 타입이자 값을 나타냄.
 *     - 선언만하고 값이 할당 안된상태.
 */
var emptyVar;


/*
 * null
 *     - 값이 비어있음을 의미
 *     - 선언 후 값이 할당되었으나 null로 할당된 상태
 *     1) null은 타입은 아니고 값을 나타냄 : null의 타입은 Object
 */
var nullVar = null;

// 1)
console.log ( typeof nullVar === null );
console.log ( nullVar === null );


// 콘솔로그 출력
console.log( typeof intNum
    , typeof floatNum
    , typeof singleQuoteStr
    , typeof doubleQuoteStr
    , typeof singleChar
    , typeof boolVar
    , typeof emptyVar
    , typeof nullVar );

