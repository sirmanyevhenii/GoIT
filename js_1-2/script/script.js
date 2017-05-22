var base, exponent;
base = prompt('Enter base');
power = prompt('Enter exponent');

function pow(base, exponent) {
	for (var i = 1; i < exponent; i++) {
		base *= base;
	}
	return base;
}

console.log(pow(base, exponent));

// ----------------- 2 task --------------------------
// ---------------------------------------------------

var arr = [];
for (var i = 0; i < 5; i++) {
    arr[i] = prompt('Enter ' + (5 - i) + ' names');
}

var userName = prompt('Enter your name');
for (var i = 0; i < 5; i++) {
    if (arr[i] == userName) {
    alert(userName + ', your entrance is successful');
    break;
    }
}

if (i >= 5 || i == undefined) {
    alert('Access error');
}