# Tsaro IP Server

Small Webserver that returns the IP of the caller. IPv4 and IPv6 capable.

The Server listens on port 80.

Can be used behind a reverse proxy by setting the *x-forwarded-for* header.

## Direct usage

```
node install
node main.js
```

## Using docker

`docker run -d --net=host tsaro/ip-server`

