// test/main.js
var satelize = require('../src/satelize');
var assert = require("assert");

describe('service calls', function() {
    describe('with ip arguments', function() {
        it('return Netherlands nice country', function(done) {
            satelize.satelize({JSONP: false, ip:'46.19.37.108', timeout:1000}, function(err, payload) {
                if (err) console.log(err);

                console.log(payload);

                assert.equal(payload.country.en, 'Netherlands');
                assert.notEqual(payload.country.en, 'France');

                done();
            });
        });
    });
});