App.CustomersController = Ember.ArrayController.extend({
  // sortProperties: ['ContactName'], // uncomment this to sort the list of customers by default
  sortAscending: false,
  actions: {
    sortByName: function() {
      this.toggleProperty("sortAscending");
      this.set("sortProperties", ["ContactName"]);
    }
  }
});
