var exec = require("child_process").exec;
function begin(parameter, response){
  console.log("handle the 'begin' call!");
	exec("dir", function(error, stdout, stderr){
		response.writeHeader(200,{"content-type":"text/plain"});
		console.log("error-----"+error);
		console.log("stdout----"+stdout);
		console.log("stderr----"+stderr);
		response.write(stdout);
		response.end();
	});
}
function end(parameter, response){
	console.log("handle the 'end' call!");
		response.writeHeader(200,{"content-type":"text/plain"});
		response.write("end...!");
		response.end();
}
function jsonp(parameter, response){
	console.log("handle the 'jsonp' call!");
		response.writeHeader(200,{"content-type":"text/plain"});
		response.write(parameter+"([ { name:'John',age:'19'},{ name:'joe',age:'20'}] );");
		response.end();
}
function CROS_testData(parameter, response){
	console.log("handle the 'CROS' call!");
		response.writeHeader(200,{"content-type":"text/plain","Access-Control-Allow-Origin":"*"});
		response.write("hellow!"+parameter);
		response.end();
}
exports.begin = begin;
exports.end = end;
exports.jsonp = jsonp;
exports.CROS_testData = CROS_testData;
