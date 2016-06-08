var http = require('http');
var ipaddr = require('ipaddr.js');

var server = http.createServer(function(req, res) {
  var ipString = req.headers['x-forwarded-for'] || 
  req.connection.remoteAddress || 
  req.socket.remoteAddress ||
  req.connection.socket.remoteAddress;

  var ipToSend;

  if (ipaddr.IPv4.isValid(ipString)) {
    // ipString is IPv4
    ipToSend = ipString			
  } else if (ipaddr.IPv6.isValid(ipString)) {
    var ip = ipaddr.IPv6.parse(ipString);
    if (ip.isIPv4MappedAddress()) {
      // ip.toIPv4Address().toString() is IPv4
      ipToSend = ip.toIPv4Address().toString();
    } else {
      ipToSend = ipString;
      // ipString is IPv6
    }
  }
 
  res.writeHead(200);
  res.end(ipToSend);
  console.log(ipToSend);
});
server.listen(80);
