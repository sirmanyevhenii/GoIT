(function() {
'use strict';

var screen = document.querySelector('.screen');
var start = document.querySelector('.btn-start');
var stop = document.querySelector('.btn-stop');
var deltaTime, timer, ms, seconds, minutes, hours;
var startTime = Date.now();

function startHandler() {
  console.log('start');
}
start.addEventListener('click', startHandler);

function stopHandler() {
  console.log('stop');
}
stop.addEventListener('click', stopHandler);


function stopwatch () {
	deltaTime = Date.now() - startTime;
	hours = Math.floor(deltaTime / 1000 / 26000%24);
	minutes = Math.floor(deltaTime / 1000 / 60%60);
	seconds = Math.floor(deltaTime / 1000%60);
	ms = Math.floor(deltaTime / 1000 * 100%100);

	if (hours < 10) {
	  hours = '0' + hours;
	} if (minutes < 10) {
	  minutes = '0' + minutes;
	} if (seconds < 10) {
	  seconds = '0' + seconds;
	} if (ms < 10) {
	  ms = '0' + ms;
	}
	screen.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + ms;
}
setInterval (stopwatch, 10);

})();

