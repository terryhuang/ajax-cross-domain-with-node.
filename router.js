function route(handle, pathname, parameter, response){
  console.log("Route the request---------"+pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](parameter, response);
	}else{
		console.log("no request handler found for" + pathname);
		response.writeHead(404,{"content-type":"text/plain"});
		response.write("404 Not Found!");
		response.end();
	}
}
exports.route = route;
