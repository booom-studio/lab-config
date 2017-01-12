'use strict';

const tools = require('lab-di/tools')();
const path = require('path');

module.exports = function() {
  this.World = World;
};

function World() {
  tools.registerModuleDir(path.resolve(__dirname, '../'), 'config');

  const container = tools.getDI();
  this.config = container.get('config');
}
