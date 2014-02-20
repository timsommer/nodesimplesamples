var blocker = require("./blocker");


function start(response) {
	console.log("Request handler 'start' was called.");

	var items = [ 1, 2, 3, 4, 5, 6 ];
	var results = [];

	items.forEach(function(item) {
	  blocker.block(item, function(result){
	    results.push(result);
	    console.log(result + ' returned');
	    if(results.length == items.length) {
	        console.log('Done', results);
	        response.writeHead(200, {"Content-Type": "text/plain"});
			response.write("Hello Start");
			response.end();
	    }
	  })
	});
}

function upload(response) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}

exports.start = start;
exports.upload = upload;