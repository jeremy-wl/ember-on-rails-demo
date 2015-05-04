App.CustomerSerializer = DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    
    return payload.map(function(customer) {
    	customer.id = customer.CustomerID;
      return customer;
      
    });
  }
})

App.Customer = DS.Model.extend({
    
    ContactName:  DS.attr('string'),
    Address:      DS.attr('string'),
    
})
