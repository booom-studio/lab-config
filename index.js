'use strict';

function config(container) {
  const implementation = process.env.LAB_CONFIG || 'memory';
  return container.getImplementation(config.serviceName, implementation);
}

config.type = 'factory';
module.exports = config;

