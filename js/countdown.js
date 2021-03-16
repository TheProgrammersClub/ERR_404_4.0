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
let start_date = new Date(2021, 2, 20, 7, 0, 0, 0);
let end_date = new Date(2021, 2, 21, 17, 0, 0, 0);
let result_date = new Date(2021, 2, 21, 19, 30, 0, 0);

function countDownTimerCallback(t) {

	t = t.getTime();

	let curr_date = new Date();
	let t2 = curr_date.getTime();
	let diff = t - t2;

	if (diff <= 0) { return false;}

	// each result is subtracted from t so that later values can be calculated correctly!

	let day = Math.floor((t - t2) / (86400000));
	t = t - day * 86400000; // 24 * 60 * 60 * 1000

	let hour = Math.floor((t - t2) / (3600000));
	t = t - hour * 3600000; // 60 * 60 * 1000

	let min = Math.floor((t - t2) / (60000));
	t = t - min * 60000; // 60 * 1000

	let sec = Math.floor((t - t2) / (1000));

	document.getElementById('day').innerHTML = day;
	document.getElementById('hour').innerHTML = hour;
	document.getElementById('min').innerHTML = min;
	document.getElementById('sec').innerHTML = sec;
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
