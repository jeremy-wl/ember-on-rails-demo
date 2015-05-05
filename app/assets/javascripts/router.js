// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
   this.resource('customers', function() {
      this.resource('customer', {path: '/:customerId'});
   });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
   this.transitionTo('customers'); 
  }
});
