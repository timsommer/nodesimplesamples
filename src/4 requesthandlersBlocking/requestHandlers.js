var blocker = require("./blocker");

function start() {
	console.log("Request handler 'start' was called.");
	blocker.block();
	return "Hello Start";
}

function upload() {
	console.log("Request handler 'upload' was called.");
	return "Hello Upload";
}

exports.start = start;
exports.upload = upload;