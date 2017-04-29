/*!
 * longest <https://github.com/jonschlinkert/longest>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var expand = require('fill-range');
var longest = require('./');

describe('longest', function() {
  it('Should return the longest item in the array', function() {
    assert.equal(longest(['a', 'abcde', 'abc']), 'abcde');
    assert.equal(longest(['a', 'abcde', 'abc']).length, 5);
    assert.equal(longest(expand('0', '10')), '10');
    assert.equal(longest(expand('0', '100')), '100');
    assert.equal(longest(expand('0', '1000')), '1000');
  });
});
