function block(val, callback) {	
	console.log('do something with \''+val+'\', return 1 sec later');
	setTimeout(function() { callback(val * 2); }, 1000);	
}

exports.block = block;