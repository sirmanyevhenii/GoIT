// function pow(number, power) {

// 	for (var i = 1; i < power; i++) {
// 		number *= number;
// 	}

// 	return number;
// }

// var number, pow;
// number = prompt("Enter your number", '');
// power = prompt("bring to this power", '');

// console.log(pow(number, power));



// ----------------- 2 task --------------------------
// ---------------------------------------------------



var name, enterName, enterYourName;
  name = [];
  enterName = prompt('Enter any name');

for (var i = 0; i < 5; i++) {
	name.push('enterName');
}

  enterYourName = prompt('Enter your name');

for (var i = 0; i < 5; i++) {
	if (name === enterYourName) {
		alert(enterYourName + 'your entrance is successful');
	} else if (enterYourName !== name) {
		alert('Access error');
	}
}

// return;