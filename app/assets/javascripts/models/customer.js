App.CustomerSerializer = DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    
    return payload.map(function(customer) {
    	customer.id = customer.CustomerID;
    	if (customer.Fax == null)
    	  customer.Fax = "N/A";
    	if (customer.Region == null)
    	  customer.Region = "N/A";
      return customer;
      
    });
  }
})

var attr = DS.attr; 

App.Customer = DS.Model.extend({
    
    Address:      attr('string'),
    City:         attr('string'),
    CompanyName:  attr('string'),
    ContactName:  attr('string'),
    ContactTitle: attr('string'),
    Country:      attr('string'),
    Fax:          attr('string'),
    Phone:        attr('string'),
    PostalCode:   attr('string'),
    Region:       attr('string'),

})
