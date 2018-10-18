vertx.createHttpServer().requestHandler({ request ->
    request.response().end("Groovy world")
}).listen(25002)
