'use strict';
const _ = require('lodash');
const config = require('config');

module.exports = function() {
  const overrides = {};
  return Object.freeze({
    get: function (key, defaultValue)  {
      return _.get(overrides, key) || config.get(key) || defaultValue
    },
    update: (key, newValue) => _.set(overrides, key, newValue)
  });
};
