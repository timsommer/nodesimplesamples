function block(val, callback) {	
	console.log('do something with \''+val+'\', return 5 sec later');
	setTimeout(function() { callback(val * 2); }, 5000);	
}

exports.block = block;