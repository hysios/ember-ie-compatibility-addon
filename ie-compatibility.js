'use strict';

var path    = require('path'),
    fs      = require('fs'),
    mergeTrees = require('broccoli-merge-trees'),
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
  var treePath =  path.join('node_modules', 'ember-ie-compatibility-addon', name);

  if (fs.existsSync(treePath)) {
    if (name === 'vendor') {
      var html5shivPath = path.join('node_modules', 'ember-ie-compatibility-addon', 'bower_components/html5shiv');
      return mergeTrees(treePath, html5shivPath);
    } else {
      return unwatchedTree(treePath);
    }
  }
};

EmberIECompatibility.prototype.included = function included(app) {
  this.app = app;

  this.app.legacyFilesToAppend.unshift('vendor/ember-es5-sham.js');
  this.app.legacyFilesToAppend.unshift('dist/html5shiv.js');
};

module.exports = EmberIECompatibility;
