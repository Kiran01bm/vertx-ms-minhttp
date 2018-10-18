vertx.createHttpServer().requestHandler(vertx.createHttpS function (request) {
    request.response().end("Hello world");
}).listen(25000);
