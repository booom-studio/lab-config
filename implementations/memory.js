'use strict';
const _ = require('lodash');

module.exports = function() {
  const config = {};
  return Object.freeze({
    get: (key, defaultValue) => _.get(config, key, defaultValue),
    update: (key, newValue) => _.set(config, key, newValue)
  });
};
