// DEPENDENCIES

var path = require('path');
var http = require('http');

// db mode
var mmdbreader = require('maxmind-db-reader');

// CODE


/* SERVICE PROVIDED BY TELIZE.COM http://www.telize.com/geoip/46.19.37.108 */

var serviceHost = 'www.telize.com';
var servicePath = '/geoip';
var serviceJSONP = '?callback=getgeoip';

function Satelize() {
  this.init();
}

Satelize.prototype.init = function() {

  //  load db
  this.db = mmdbreader.openSync(path.join(__dirname,'/DB/20151116/GeoLite2-City.mmdb'));

  this.initialized = true;
};

Satelize.prototype.satelize = function(options, next) {
  if (!this.initialized) {
    return next(new Error('db not loaded yet'));
  }

  var data = this.db.getGeoDataSync(options.ip);

  if (data) {
    return next(null, {
      ip: options.ip,
      continent_code: data.continent.code,
      continent: data.continent.names,
      country_code: data.country.iso_code,
      country: data.country.names,
      latitude: data.location.latitude,
      longitude: data.location.longitude,
      timezone : data.location.time_zone
    });
  }

  return next(null, null);

  // TODO: refactor old way of to doing with user token and new API
 /* var path = (options.ip ? ('/'+options.ip) : '') + (options.JSONP ? serviceJSONP : '');
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
  req.end();*/
};

// EXPORTS

module.exports = new Satelize();
