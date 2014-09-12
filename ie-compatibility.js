'use strict';

var path    = require('path'),
    fs      = require('fs'),
    merge   = require('lodash-node/modern/objects/merge'),
    defaults = require('lodash-node/modern/objects/defaults');


function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

function EmberIECompatibility(project) {
    this.project = project;
    this.name = 'Ember CLI older IE browser compatibility Addon';
}

EmberIECompatibility.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join(this.project.root, name);

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberIECompatibility.prototype.included = function included(app) {
  this.app = app;

  this.app.import('vendor/ember-es5-sham.js');
};

module.exports = EmberIECompatibility;
