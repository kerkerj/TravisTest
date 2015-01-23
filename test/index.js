'use strict';

var lib = require('../lib/utils');
var should = require('should');

describe('Test library', function() {
    it('should return sum of a and b', function(done) {
        var sum = lib.add(1, 2);
        sum.should.equal(3);

        sum = lib.add("12", "2225");
        (sum === null).should.be.true;

        sum = lib.add("12", 2225);
        (sum === null).should.be.true;

        done();
    });

    it('should return multiple result of a and b', function(done) {
        var sum = lib.mutiply(5, 10);
        sum.should.equal(50);

        sum = lib.mutiply("12", "2225");
        (sum === null).should.be.true;

        sum = lib.mutiply("12", 2225);
        (sum === null).should.be.true;

        done();
    });
});
