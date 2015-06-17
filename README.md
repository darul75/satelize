# Satelize [![NPM version](https://badge.fury.io/js/satelize.png)](http://badge.fury.io/js/satelize) [![Build Status](https://travis-ci.org/darul75/satelize.png?branch=master)](https://travis-ci.org/darul75/satelize) [![Total views](https://sourcegraph.com/api/repos/github.com/darul75/satelize/counters/views.png)](https://sourcegraph.com/github.com/darul75/satelize)

**Satelize** NodeJS module to retrieve user location information based on IP, combined with expressjs for instance make life easier to get some stuff as latitude/longitude of your visitor.

Inspired and using http://www.telize.com/ service. Free today.

You will find informations there too.

## Why ?

Because ecchymose in the nose. I needed something but on server side.

With expressjs for instance, you can get your request IP, then just need to use this library that will make the call to get user location data.

And it is done.

## Demo

http://darul-demo.herokuapp.com/satelize

## Install

~~~
npm install satelize
~~~

## Usage

```javascript
var satelize = require('satelize');

// Example retrieve IP from request
// var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;

// then satelize call 

satelize.satelize({ip:'46.19.37.108'}, function(err, geoData) {
  // process err
  
  // if data is JSON, we may wrap it in js object
  var obj = JSON.parse(geoData);
  
  
  // if used with expressjs
  // res.send(geoData);
  // res.json...
});
    
    
// MORE EXAMPLES

satelize.satelize({ip:'46.19.37.108'}, function(err, geoData) {
}); // json output for this ip

satelize.satelize({ip:'46.19.37.108', JSONP: true}, function(err, geoData) {
}); // jsonp output for this ip

satelize.satelize({}, function(err, geoData) {
}); // json output request ip, meaning server

satelize.satelize({JSONP: true}, function(err, geoData) {
}); // jsonp output request ip
```    
    
## Return    

~~~ json
{
    "ip": "46.19.37.108",
    "country_code": "NL",
    "country_code3": "NLD",
    "country": "Netherlands",
    "continent_code": "EU",
    "latitude": 52.5,
    "longitude": 5.75,
    "dma_code": "0",
    "area_code": "0",
    "asn": "AS196752",
    "isp": "Tilaa V.O.F.",
    "timezone":"Europe/Amsterdam"
}
~~~

Details

- **ip** (Visitor IP address, or IP address specified as parameter)
- **country_code** (Two-letter ISO 3166-1 alpha-2 country code)
- **country_code3** (Three-letter ISO 3166-1 alpha-3 country code)
- **country** (Name of the country)
- **region_code** (Two-letter ISO-3166-2 state / region code)
- **region** (Name of the region)
- **city** (Name of the city)
- **postal_code** (Postal code / Zip code)
- **continent_code** (Two-letter continent code)
- **latitude** (Latitude)
- **longitude** (Longitude)
- **dma_code** (DMA Code)
- **area_code** (Area Code)
- **asn** (Autonomous System Number)
- **isp** (Internet service provider)
- **timezone** (Time Zone)


## Options

- **ip** : if not set, give request ip.
- **JSONP** : if set give JSONP output, default format is json. I do not like JSONP ;)
- **timeout** : default 1000ms

## Release

- 0.1.2: fix timeout duplicate callback call

## Metrics

[![NPM](https://nodei.co/npm/satelize.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/satelize/)

## License

The MIT License (MIT)

Copyright (c) 2013 Julien Valéry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
