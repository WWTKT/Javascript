/**
 * Created by candyimg on 2016. 8. 14..
 */

var func = function () {
    return 42;
}
(function() {
    console.log("function called");
})();
// Uncaught TypeError: (intermediate value)(...) is not a function(…)
