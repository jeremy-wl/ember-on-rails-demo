App.CustomerRoute = Ember.Route.extend({
  model: function(params) {
    return data.d.results.findBy('CustomerID', params.customerId)
  }
})
