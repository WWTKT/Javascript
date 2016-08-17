/**
 * Created by kenny.k on 2016. 8. 16..
 */
/*
 * 1.객체의 메서드 호출할 때 this 바인딩
 */
console.log ( "__KENNY__ 1.객체의 메서드 호출할 때 this 바인딩");

var myObject = {
    name : 'foo'
    , sayName : function() {                // 익명함수
        console.log ( this.name );
    }
};

var otherObject = {
    name : 'bar'
};

otherObject.sayName = myObject.sayName;     // 두 객체가 동일한 익명함수를 참조함

myObject.sayName();     // foo
otherObject.sayName();  // bar



/*
 * 전역객체(1)
 */
console.log ( "__KENNY__ 전역객체(1)");

var foo = "I'm foo";
console.log ( foo );            // I'm foo
console.log ( window.foo );     // I'm foo : WS에서는 에러 / 크롬에서는 정상



/*
 * 2.함수를 호출할 때 this 바인딩
 */
console.log ( "__KENNY__ 2.함수를 호출할 때 this 바인딩");

var test = 'This is test';
console.log ( window.test );    // This is test : WS에서는 에러 / 크롬에서는 정상

var sayFoo = function() {
    var test = "This is NOT test";

    console.log ( this.test );  // This is test
}

sayFoo();



/*
 * 2.내부함수에서의 this 바인딩
 */
console.log ( "__KENNY__ 2.내부함수에서의 this 바인딩");

var value = 100;

var myObject = {
    value : 1
    , func1 : function() {
        this.value += 1;
        console.log ( "func1() this.value : " + this.value);            // 2

        func2 = function() {
            this.value += 1;
            console.log ( "func2() this.value : " + this.value );       // 102

            func3 = function() {
                this.value += 1;
                console.log ( "func3() this.value : " + this.value );   // 103
            }

            func3();
        }

        func2();
    }
};

myObject.func1();


/*
 * 2.내부함수의 this 바인딩 한계 극복
 */
console.log ( "__KENNY__ 2.내부함수의 this 바인딩 한계 극복");

var value = 100;

var myObject = {
    value : 1
    , func1 : function() {
        var that = this;

        this.value += 1;
        console.log ( "func1() this.value : " + this.value);            // 2

        func2 = function() {
            that.value += 1;
            console.log ( "func2() this.value : " + that.value );       // 3

            func3 = function() {
                that.value += 1;
                console.log ( "func3() this.value : " + that.value );   // 4
            }

            func3();
        }

        func2();
    }
};

myObject.func1();


/*
 * 3.생성자 함수를 호출할 때 this 바인딩
 *     1) new Person()으로 생성자함수 호출
 *     2) 빈 객체 생성
 *     3) 이 빈 객체는 Person()의 prototype 프로퍼티가 가리키는 Person.prototype 객체를 프로퍼타입 객체로 가짐
 *     4) this.name으로 동적 프로퍼티 생성
 *     5) 생성된 객체를 리턴
 */
console.log ( "__KENNY__ 3.생성자 함수를 호출할 때 this 바인딩");

var Person = function ( name ) {
    this.name = name;
};

var foo = new Person ( "foo" );
console.log ( foo.name );


/*
 * 3.1 객체생성의 두가지 방법 ( 리터럴 vs 생성자함수 )
 */
console.log ( "__KENNY__ 3.1 객체생성의 두가지 방법 ( 리터럴 vs 생성자함수 )");

// 리터럴방식
var foo = {
    name : 'foo'
    , age : 35
    , gender : 'man'
};

console.dir ( foo );

// 생성자함수
function Person ( name, age, gender ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var bar = new Person ( 'bar', 32, 'man' );
var baz = new Person ( 'baz', 33, 'man' );

console.dir ( bar );    // Person
console.dir ( baz );    // Person




/*
 * 3.2 new를 안붙이고 생성자함수 호출
 */
console.log ( "__KENNY__ 3.2 new를 안붙이고 생성자함수 호출");

var qux = Person ( 'qux', 20, 'man' );

console.log ( qux );                // undefined
console.log ( window.name );        // qux
console.log ( window.age );         // 20
console.log ( window.gender );      // man



/*
 * 3.2의 문제 해결 - 더글라스 크락포드 패턴
 */
function A ( arg ) {
    if ( !(this instanceof arguments.callee) ) {
        return new A(arg);
    }

    this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);

console.log ( a.value );        // 100
console.log ( b.value );        // 10
console.log ( window.value );   // undefined
