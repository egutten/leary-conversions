function Conversion() {
  
  this.convert = (config) => {
    config = config || {};
    
    this.updateCustomer(config);
    this.updateActivity(config);
  }

  this.updateCustomer = (config) => {
    this.postData('https://api.getleery.com/customer-update', {
      email: config.email,
      first_name: config.first_name,
      last_name: config.last_name,
      company_name: config.company_name,
      customer_id: this.getCookieValue('customerId')
    })
    .catch(error => console.log(error));
  }

  this.updateActivity = (config) => {
    this.postData('https://api.getleery.com/customer-activity', {
      event: "conversion",
      user_id: config.user_id,
      conversion_event_id: config.conversion_event_id, 
      customer_id: this.getCookieValue('customerId')
    })
    .catch(error => console.log(error));
    }

  this.getCookieValue = (cookie_name) => {
    var b = document.cookie.match('(^|[^;]+)\\s*' + cookie_name + '\\s*=\\s*([^;]+)');
    return b ? Number(b.pop()) : '';
  };
  
  this.postData = function(url = '', data = {}) {
    return fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json;charset=UTF-8'},
      body: JSON.stringify(data)
    })
    .then(response => response.json()); // TODO: remove?
  };

}

var conversion = new Conversion();

const attr = document.getElementById('123456').getAttribute('data-config');
const config = JSON.parse(attr);
conversion.convert(config);

// ./node_modules/.bin/http-server
