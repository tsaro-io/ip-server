FROM alpine
MAINTAINER Maximilian Florkowski <maximilian.florkowski@tsaro.io>

RUN apk add --update nodejs

RUN [ "mkdir", "-p", "/opt/tsaro-ip-server" ]

WORKDIR /opt/tsaro-ip-server/

Add main.js ./
Add package.json ./

RUN npm install

EXPOSE 80

ENTRYPOINT [ "/usr/bin/node", "/opt/tsaro-ip-server/main.js" ]
