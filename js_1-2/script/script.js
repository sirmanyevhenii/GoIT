'use strict'; 
//---------------------------------------------------
// -----------------1 task --------------------------

var base, exponent;
base = prompt('Enter base');
exponent = prompt('Enter exponent');

function pow(base, exponent) {
	for (var i = 1; i < exponent; i++) {
		base *= base;
	}
	return base;
}
console.log(pow(base, exponent));

// ----------------- 2 task --------------------------
confirm('task 2');
// ---------------------------------------------------

var arr = [];
for (var i = 0; i < 5; i++) {
    arr[i] = prompt('Enter ' + (5 - i) + ' names', 'name');
}  // null та пусті імена опрацьовуються, а не мали б

var userName = prompt('Enter your name','your name'),
    result = 'Access error';
for (var i = 0; i < 5; i++) {
    if (arr[i] == userName) {
    result = userName + ', your entrance is successful';
    break;
    }
}
alert(result);