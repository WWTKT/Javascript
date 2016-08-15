/**
 * Created by candyimg on 2016. 8. 15..
 */

// self() 함수
var self = function () {
    console.log('a');
    return function () {
        console.log('b');
    };
};

self = self();  // a
self(); // b - 리턴받은 새로운 함수 호출
