// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
   this.resource('customers');
   this.resource('customer', {path: '/customer/:customerId'});
});
