function block(args, callback) {	
	
	function sleep(milliSeconds, callback) {
		
		setImmediate(function() { 
			console.log("entering sleep");
			var startTime = new Date().getTime();
			while (new Date().getTime() < startTime + milliSeconds);
			console.log("waking up");
		});	
	
		callback();
	};

	sleep(10000, callback); 
}

exports.block = block;