/**
 * Created by candyimg on 2016. 8. 15..
 */

// parent() 함수 정의
function parent() {
    var a = 100;
    var b = 200;

    // child() 내부 함수 정의
    function child() {
        var b = 300;

        console.log(a); // 100
        console.log(b); // 300
    }
    child();
    console.log(b); // 200
}
parent();
child();    // Uncaught ReferenceError: child is not defined(…)
