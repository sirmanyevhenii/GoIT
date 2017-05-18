var number, power;
number = prompt('Enter your number');
power = prompt('bring to this power');

function pow(number, power) {
	for (var i = 1; i < power; i++) {
		number *= number;
	}
	return number;
}

console.log(pow(number, power));

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

if (i >= 5) {
    alert('Access error');
}