/*! 
* @license satelize - v0.1.1
* (c) 2013 Julien VALERY https://github.com/darul75/satelize
* License: MIT 
*/
function Satelize(){this.init()}var http=require("http"),serviceHost="www.telize.com",servicePath="/geoip",serviceJSONP="?callback=getgeoip";Satelize.prototype.init=function(){return this},Satelize.prototype.satelize=function(a,b){var c=(a.ip?"/"+a.ip:"")+(a.JSONP?serviceJSONP:""),d=a.timeout||1e3,e={hostname:serviceHost,path:servicePath+c,method:"GET",port:80},f=http.request(e,function(a){a.setEncoding("utf8");var c="";a.on("data",function(a){c+=a}),a.on("end",function(){return b(null,c)})});return f.on("error",function(a){return b(a)}),f.setTimeout(d,function(){return b(new Error("timeout"))}),f.end(),this};var sat=new Satelize;module.exports=sat;