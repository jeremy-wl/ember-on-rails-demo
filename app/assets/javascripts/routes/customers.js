App.CustomersRoute = Ember.Route.extend({
  model: function() {
    return data.d.results;
  }
});
