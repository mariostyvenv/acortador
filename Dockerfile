FROM ubuntu:latest
RUN mkdir /src
RUN apt-get update
RUN apt-get -y install nodejs
RUN apt-get -y install npm
RUN npm install nodemon -g
WORKDIR /src/acortador
EXPOSE 3000
CMD nodemon start.js