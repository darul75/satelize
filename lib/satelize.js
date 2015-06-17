/*! 
* @license satelize - v0.1.2
* (c) 2013 Julien VALERY https://github.com/darul75/satelize
* License: MIT 
*/
function Satelize(){this.init()}var http=require("http"),serviceHost="www.telize.com",servicePath="/geoip",serviceJSONP="?callback=getgeoip";Satelize.prototype.init=function(){return this},Satelize.prototype.satelize=function(a,b){var c=(a.ip?"/"+a.ip:"")+(a.JSONP?serviceJSONP:""),d=a.timeout||1e3,e=!1,f={hostname:serviceHost,path:servicePath+c,method:"GET",port:80},g=http.request(f,function(a){a.setEncoding("utf8");var c="";a.on("data",function(a){c+=a}),a.on("end",function(){return e?void 0:b(null,c)})});return g.on("error",function(a){return e?void 0:b(a)}),g.setTimeout(d,function(){return e=!0,b(new Error("timeout"))}),g.end(),this};var sat=new Satelize;module.exports=sat;