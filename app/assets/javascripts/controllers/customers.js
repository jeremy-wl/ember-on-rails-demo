App.CustomersController = Ember.ArrayController.extend({
  // sortProperties: ['ContactName'], // uncomment this to sort the list of customers by default
  sortAscending: false,
  
  filterText: '',

  filteredResults: function() {
    var filter = this.get('filterText');
    return this.get('arrangedContent').filter(function(item, index, enumerable) {
      return item._data.ContactName.toLowerCase().indexOf(filter) !== -1;
    });
  }.property('filterText', 'sortProperties'),
      
  actions: {
    sortByName: function() {
      this.toggleProperty("sortAscending");
      this.set("sortProperties", ["ContactName"]);
    }
  }
});
