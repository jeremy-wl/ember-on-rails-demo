App.CustomerRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('customer', params.customerId);
  }
})
