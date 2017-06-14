(function() {
	'use strict';
	var screen = document.querySelector('.screen'),
	    startBtn = document.querySelector('.btn-start'), 
	    stopBtn = document.querySelector('.btn-stop');
	var startTime, deltaTime, timer, ms, seconds, minutes, hours, toGo, pause, pause1;
	screen.innerHTML = '00:00:00:00';
	
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

	function startPauseHandler() {
	  if (startBtn.innerHTML == 'START') {
	   	startTime = Date.now();
	   	toGo = setInterval (stopwatch, 10);
	   	startBtn.textContent = 'PAUSE';
	  } else if (startBtn.innerHTML == 'PAUSE') {
	    clearInterval(toGo);
	    pause = Date.now() - startTime;
	    startBtn.textContent = 'CONTINUE';
	  } else if (startBtn.innerHTML == 'CONTINUE') {
	   	pause1 = Date.now() - startTime;
	   	toGo = setInterval (stopwatch, 10);
	   	startTime = startTime + (pause1 - pause);
	   	startBtn.textContent = 'PAUSE';
	  }
	}
	startBtn.addEventListener('click', startPauseHandler);

	function stopHandler() {
	  clearInterval(toGo);
	  startBtn.innerHTML = 'START';
	  screen.innerHTML = '00:00:00:00';
	}
	stopBtn.addEventListener('click', stopHandler);
})();