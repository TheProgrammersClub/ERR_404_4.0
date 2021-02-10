function setSmartInterval(intervalEventCallback, interval, endCallback=null) {
	let x = setInterval(function() {
		let doInterval = intervalEventCallback();
		if (!doInterval) {
			clearInterval(x);
			if (typeof endCallback === 'function') {
				endCallback();
			}
		}
	}, interval);
}

// TODO: Change to event date
let event_date = new Date(new Date().getTime() + 10 * 1000);

function countDownTimerCallback() {

	// let event_date = new Date(new Date().getTime() + 5 * 1000);
	let curr_date = new Date();
	let t1 = event_date.getTime();
	let t2 = curr_date.getTime();
	let diff = t1 - t2;

	let day = Math.floor((t1 - t2) / (24 * 60 * 60 * 1000));
	t1 = t1 - day * 24 * 60 * 60 * 1000;
	let hour = Math.floor((t1 - t2) / (60 * 60 * 1000));
	t1 = t1 - hour * 60 * 60 * 1000;
	let min = Math.floor((t1 - t2) / (60 * 1000));
	t1 = t1 - min * 60 * 1000;
	let sec = Math.floor((t1 - t2) / (1000));

	if (diff < 0) {
		return false;
	}

	document.getElementById('day').innerHTML = day;
	document.getElementById('hour').innerHTML = hour;
	document.getElementById('min').innerHTML = min;
	document.getElementById('sec').innerHTML = sec;
	return true;
	// console.log(event_date + "\n" + curr_date + "\n" + diff);
	// console.log(day + "\n" + hour + "\n" + min + "\n" + sec);
}
function countDownTimerEndCallbackBase() {
	document.getElementById('day').innerHTML = "0";
	document.getElementById('hour').innerHTML = "0";
	document.getElementById('min').innerHTML = "0";
	document.getElementById('sec').innerHTML = "0";
}

function countDownTimerEndCallback() {
	countDownTimerEndCallbackBase();
	alert("Error 404! Error 404! Participant not found!");
	// TODO: Change to event end date
	event_date = new Date(new Date().getTime() + 10 * 1000);
	setSmartInterval(countDownTimerCallback, 1000, countDownTimerEndCallbackBase);
}

setSmartInterval(countDownTimerCallback, 1000, countDownTimerEndCallback);
