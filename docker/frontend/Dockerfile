FROM ubuntu:latest
RUN apt-get update && apt-get upgrade -y

RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install nodejs -y
RUN npm install -g @angular/cli@15.1.1

RUN mkdir /app

WORKDIR /app