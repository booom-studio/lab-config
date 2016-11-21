'use strict';

function config(container) {
  const implementation = process.env.LAB_CONFIG || 'memory';
  return container.getImplementation('lab-config', implementation);
}

config.type = 'factory';
module.exports = config;

