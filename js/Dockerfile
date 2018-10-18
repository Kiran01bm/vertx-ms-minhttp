FROM vertx/vertx3

# Set the name of the verticle to deploy
ENV VERTICLE_NAME hello.js

# Set the location of the verticles        
ENV VERTICLE_HOME /usr/verticles

# Copy your verticle to the container       
COPY $VERTICLE_NAME $VERTICLE_HOME/

# Launch the verticle                       
WORKDIR $VERTICLE_HOME
ENTRYPOINT ["sh", "-c"]
CMD ["exec vertx run $VERTICLE_NAME -cp $VERTICLE_HOME/*"]
