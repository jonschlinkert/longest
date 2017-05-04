/*!
 * longest <https://github.com/jonschlinkert/longest>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Licensed under the MIT License.
 */

require('mocha');
var assert = require('assert');
var longest = require('./');

describe('longest', function() {
  it('should return null when array is empty', function() {
    assert.equal(longest([]), undefined);
  });

  it('should throw an error when value is not an array', function() {
    assert.throws(function() {
      longest();
    })
  });

  it('should return the longest item in the array', function() {
    assert.equal(longest(['a', 'abcde', 'abc']), 'abcde');
    assert.equal(longest(['a', 'bb', 'ccc']), 'ccc');
    assert.equal(longest(['a', 'bbbb', 'ccc']), 'bbbb');
    assert.equal(longest(['aaaaa', 'bbbb', 'ccc']), 'aaaaa');
  });

  it('should skip over sparse elements', function() {
    assert.equal(longest(['a', 'abcde', null, undefined, 'abc']), 'abcde');
  });

  it('should skip over elements that do not have a .length property', function() {
    assert.equal(longest(['a', 'abcde', {}, 'abc']), 'abcde');
  });
});

