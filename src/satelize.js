// node http api
var http = require('http');

/* 
 SERVICE PROVIDED BY TELIZE.COM
 http://www.telize.com/geoip/46.19.37.108
*/

var serviceHost = 'www.telize.com';
var servicePath = '/geoip';
var serviceJSONP = '?callback=getgeoip';

function Satelize() {
  this.init();
}

Satelize.prototype.init = function() {
  return this;
};

Satelize.prototype.satelize = function(options, next) {
  var path = (options.ip ? ('/'+options.ip) : '') + (options.JSONP ? serviceJSONP : '');
  var timeout = options.timeout || 1000;
  var hasTimeout = false;
  var opts = {
    hostname: serviceHost,
    path: servicePath + path,
    method: 'GET',
    port: 80
  };
  var req = http.request(opts, function(res) {
    res.setEncoding('utf8');
  var output = '';
    res.on('data', function (chunk) { output += chunk; });
    res.on('end', function() { if(!hasTimeout) return next(null, output); });
  });
  req.on('error', function(e) {if(!hasTimeout) return next(e); });      
  req.setTimeout(timeout, function() { hasTimeout=true; return next(new Error('timeout')); });
  req.end();
  return this;
};

/**
* Export default singleton.
*/
var sat = new Satelize();
module.exports = sat;
