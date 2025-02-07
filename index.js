'use strict';
const path = require('path-cross');
const binaryExtensions = require('binary-extensions');

const extensions = new Set(binaryExtensions);

module.exports = filePath => extensions.has(path.extname(filePath).slice(1).toLowerCase());
