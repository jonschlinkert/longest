/**
 * Longest
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (arr) {
  function compare(a, b) {
    if (a.length > b.length) {return -1;}
    if (a.length < b.length) {return 1;}
    return 0;
  };
  return arr.sort(compare)[0];
};