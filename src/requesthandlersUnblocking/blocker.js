function block() {	
	console.log('Blocking thread for 10 seconds');

	function sleep(milliSeconds) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds);
	}
	
	sleep(10000);
}

exports.block = block;