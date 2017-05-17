// var number, power;
// number = window.prompt('Enter your number');
// power = window.prompt('bring to this power');

// function pow(number, power) {
// 	for (var i = 1; i < power; i++) {
// 		number *= number;
// 	}
// 	return number;
// }

// console.log(pow(number, power));



// ----------------- 2 task --------------------------
// ---------------------------------------------------



var arr = [];
for (var i = 0; i < 5; i++) {
	arr[i] = window.prompt('Enter ' + (5 - i) + ' names');
}

var userName = window.prompt('Enter your name');
for (var i = 0; i < arr.length; i++) {
	if (arr[i] === userName) {
		window.alert(userName + ', your entrance is successful');
	} else {
		window.alert('Access error');
		break;
	}
}