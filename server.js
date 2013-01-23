var http = require("http");
var url = require("url");
var qs = require('querystring');
function start(route,handle){
  function onRequest(request,response){
		console.log("-----------begin-------------");
		console.log(request.method);
		var pathname = url.parse(request.url).pathname;
		var search1 = url.parse(request.url).search;
		var parameter = '';
		if(search1){
			parameter = search1.slice(1,search1.length);
		}
		
		console.log("pathname-----------"+pathname);
		console.log("search1------------"+search1);
		console.log("search2------------"+parameter);
		
		if (request.method == 'POST') {
			var body = '';
			request.addListener('data', function (data) {
				body += data;
				console.log("data---"+data);
				route(handle, pathname, data, response);
			});
		}else{
			route(handle, pathname, parameter, response);
		}
		
		console.log("-----------end-------------");
	}
	http.createServer(onRequest).listen(8889);
	console.log("Server is starting...");
}
exports.start = start;

