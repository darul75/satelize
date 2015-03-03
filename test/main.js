// test/main.js
var satelize = require('../src/satelize');
var assert = require("assert");

describe('service calls', function() {
    describe('with ip arguments', function() {
        it('return Netherlands nice country', function(done) {
            satelize.satelize({JSONP: false, ip:'46.19.37.108', timeout:1000}, function(err, geoData) {
                if (err) console.log(err);
                
                var d = JSON.parse(geoData);
                console.log(d);

                assert.equal(d.country, 'Netherlands');
                assert.notEqual(d.country, 'France');

                done();
            });
        });
    });
});