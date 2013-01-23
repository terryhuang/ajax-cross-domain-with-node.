var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {}
handle["/"] = requestHandlers.begin;
handle["/begin"] = requestHandlers.begin;
handle["/end"] = requestHandlers.end;
handle["/jsonp/fff"] = requestHandlers.jsonp;
handle["/cros"] = requestHandlers.CROS_testData;
server.start(router.route, handle);
