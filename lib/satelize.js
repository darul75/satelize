/*! 
* @license satelize - v0.1.1
* (c) 2013 Julien VALERY https://github.com/darul75/satelize
* License: MIT 
*/
function Satelize(){this.init()}var http=require("http"),serviceHost="www.telize.com",servicePath="/geoip",serviceJSONP="?callback=getgeoip";Satelize.prototype.init=function(){return this},Satelize.prototype.satelize=function(t,e){var i=(t.ip?"/"+t.ip:"")+(t.JSONP?serviceJSONP:""),n=t.timeout||1e3,o=!1,r={hostname:serviceHost,path:servicePath+i,method:"GET",port:80},u=http.request(r,function(t){t.setEncoding("utf8");var i="";t.on("data",function(t){i+=t}),t.on("end",function(){return o?void 0:e(null,i)})});return u.on("error",function(t){return o?void 0:e(t)}),u.setTimeout(n,function(){return o=!0,e(new Error("timeout"))}),u.end(),this};var sat=new Satelize;module.exports=sat;
