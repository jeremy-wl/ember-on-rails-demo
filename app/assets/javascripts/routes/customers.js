App.CustomersRoute = Ember.Route.extend({
  model: function() {
    var customersFromStore = this.store.all('customer');
    // Use find method to fetch JSON over HTTP if there's no records available in local store
    if (!customersFromStore.content.length) {
      return this.store.find('customer');
    }
    // Otherwise use all method to return the records in the local store
    else {
      return customersFromStore;
    }
  }
});
