import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'ember-ie8-addon', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'ember-ie8-addon');

export default App;
