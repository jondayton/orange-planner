import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('budgets', function(){
    this.route('budget', {path: ':id'});
  });
  this.route('categories');
});

export default Router;
