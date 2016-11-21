'use strict';

const di = require('lab-di');
const path = require('path');

module.exports = function() {
  this.World = World;
};

function World() {
  const container = di();
  container.registerModule(require('../index'), 'lab-config');
  container.registerModule(require('../implementations/memory'), 'lab-config-memory');
  container.registerModule(require('../implementations/file'), 'lab-config-file');
  this.config = container.get('lab-config');
}
