function setSmartInterval(intervalEventCallback, t, interval, endCallback=null) {
	let x = setInterval(function() {
		if (!intervalEventCallback(t)) {
			clearInterval(x);
			if (typeof endCallback === 'function') {
				endCallback();
			}
		}
	}, interval);
}

// TODO: Change to event date
let start_date = new Date(new Date().getTime() + 10 * 1000);
let end_date = new Date(new Date().getTime() + 20 * 1000);
let result_date = new Date(new Date().getTime() + 30 * 1000);

function countDownTimerCallback(t) {

	let curr_date = new Date();
	let t2 = curr_date.getTime();
	let diff = t.getTime() - t2;

	if (diff <= 0) { return false;}

	let day = (diff) / (24 * 60 * 60 * 1000);
	let hour = (diff) / (60 * 60 * 1000) - day;
	let min = (diff) / (60 * 1000) - hour;
	let sec = (diff) / (1000) - min;

	document.getElementById('day').innerHTML = Math.floor(day);
	document.getElementById('hour').innerHTML = Math.floor(hour);
	document.getElementById('min').innerHTML = Math.floor(min);
	document.getElementById('sec').innerHTML = Math.floor(sec);
	return true;
}

function countDownTimerEndCallbackBase() {
	document.getElementById('countdown-text').innerHTML = "Err404 4.0 ended";
	document.getElementById('day').innerHTML = "0";
	document.getElementById('hour').innerHTML = "0";
	document.getElementById('min').innerHTML = "0";
	document.getElementById('sec').innerHTML = "0";
}

function endEndCallBack() {
	setSmartInterval(countDownTimerCallback, result_date, 1000, countDownTimerEndCallbackBase);
	document.getElementById('countdown-text').innerHTML = "Results will be declared in";
}

function endStartCallBack() {
	setSmartInterval(countDownTimerCallback, end_date, 1000, endEndCallBack);
	document.getElementById('countdown-text').innerHTML = "Err404 4.0 Ends in";
}

setSmartInterval(countDownTimerCallback, start_date, 1000, endStartCallBack);
