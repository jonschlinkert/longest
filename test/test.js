/**
 * Longest
 * Copyright (c) 2014 Jon Schlinkert <https://github.com/jonschlinkert>
 * Licensed under the MIT License (MIT).
 */

// node_modules
var file = require('fs-utils');
var expect = require('chai').expect;

// Local lib
var longest = require('../');

var fixtures = require('path').join.bind(null, __dirname, 'fixtures');
var arr = file.readJSONSync(fixtures('arr.json'));

// Tests
describe('longest', function() {
  it('Should return the length of the longest item in the given array', function() {
    var expected = longest(arr).length;
    var actual = 32;
    expect(actual).to.eql(expected);
  });

  it('Should return the longest item in the given array', function() {
    var expected = longest(arr);
    var actual = 'assemble-contrib-anchors-example';
    expect(actual).to.eql(expected);
  });
});