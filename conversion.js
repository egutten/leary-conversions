function Conversion() {

  this.init = function(config) {
    $.ajax({
      url: "http://localhost:8080/customer-update",
      type: "PUT",
      dataType: "json",
      data: {
        email: config.email,
        first_name: config.first_name,
        last_name: config.last_name,
        company_name: config.company_name,
        customer_id: Number(this.getCookieValue('customer_id'))
      },
      error: function(error) {
        console.log(error);
      },
      success: function(response){
        console.log(response);
      }
    });
  }

  // this.createConversion = function(user_data) {
  // 
  // }

  this.getCookieValue = function(cookie_name) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + cookie_name + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  }
  
  
  //2. insert new customer activity into customer activities table:
    // event, 
    // conversion event id, 
    // user id, 
    // customer id

}

var conversion = new Conversion();

// ./node_modules/.bin/http-server
