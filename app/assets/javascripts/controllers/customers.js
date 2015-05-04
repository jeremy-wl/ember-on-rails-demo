App.CustomersController = Ember.ArrayController.extend({
  // sortProperties: ['ContactName'], // uncomment this to sort the list of customers by default
  actions: {
    sortByName: function() {
      this.set("sortProperties", ["ContactName"]);
    }
  }
});
