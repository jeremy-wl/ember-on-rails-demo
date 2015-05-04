App.CustomerAdapter = DS.RESTAdapter.extend({
  // retrieve all customers records from the remote API using 
	findAll: function(store, type, sinceToken) {
		var url = 'http://services.odata.org/V2/Northwind/Northwind.svc/Customers?$format=json&$callback=?'; 
    return $.getJSON(url).then(function(data) {
      console.log(data.d.results);
      return data.d.results;
    })
  }
});
