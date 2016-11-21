'use strict';
const { expect } = require('chai');

module.exports = function() {
  this.Given('the config $key is set to "$value"', function(key, value) {
    this.config.update(key, value);
  });
  this.Then('the config $key is not set', function(key) { 
    expect(this.config.get(key)).to.be.undefined; 
  });
  
  this.Then('the config value $key is "$value"', function(key, value) {
    expect('' + this.config.get(key)).to.equal(value);
  });
};
