var fibo = function () {
  // 자유변수
  var cache = {'0' : 0, '1' : 1};

  // 클로저
  var func = function ( n ) {
    var result = 0;

    if ( typeof ( cache[n] ) === 'number' ) {
      result = cache[n];
    } else {
      result = cache[n] = func ( n - 1 ) + func ( n - 2 );
    }

    return result;
  };

  return func;
}();

console.log ( fibo ( 10 ) );
