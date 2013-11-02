// node http api
var http = require('http');

/* 
 SERVICE PROVIDED BY TELIZE.COM
 http://www.telize.com/geoip/46.19.37.108
*/

exports.serviceHost = 'www.telize.com';
exports.servicePath = '/geoip';
exports.serviceJSONP = '?callback=getgeoip';

exports.satelize = function(options, next) {
    var path = (options.ip ? ('/'+options.ip) : '') + (options.JSONP ? this.serviceJSONP : '');
    var options = {
      hostname: this.serviceHost,
      path: this.servicePath + path,
      method: 'GET',
      port: 80
    };

    var req = http.request(options, function(res) {
      res.setEncoding('utf8');
      var output = '';

      res.on('data', function (chunk) {
          output += chunk;
      });

      res.on('end', function() {                      
        return next(null, output);        
      });
    });

    req.on('error', function(e) {
      return next(e);
    });
      
    req.setTimeout(1000, function() {
      return next(new Error('timeout'));
    });

    req.end();
};

exports.answer = 42; // What is the question?