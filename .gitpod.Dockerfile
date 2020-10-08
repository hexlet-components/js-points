FROM node:14.13.1-alpine3.12

RUN apk update
RUN apk add --update-cache bash make
