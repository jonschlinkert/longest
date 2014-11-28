/**
 * longest <https://github.com/jonschlinkert/longest>
 *
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT license.
 */

var should = require('should');
var expand = require('fill-range');
var longest = require('./');

describe('longest', function() {
  it('Should return the longest item in the array', function() {
    longest(['a', 'abcde', 'abc']).should.eql('abcde');
    longest(['a', 'abcde', 'abc']).length.should.eql(5);
    longest(expand('0', '10')).should.eql('10');
    longest(expand('0', '100')).should.eql('100');
    longest(expand('0', '1000')).should.eql('1000');
  });
});