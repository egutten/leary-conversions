function Conversion() {

  this.updateCustomer = function(config) {
    postData('http://localhost:8080/customer-update', {
      email: config.email,
      first_name: config.first_name,
      last_name: config.last_name,
      company_name: config.company_name,
      customer_id: Number(this.getCookieValue('customer_id'))
    })
    .then(data => console.log(JSON.stringify(data)))
    .catch(error => console.log(error));
    
    function postData(url = '', data = {}) {
      return fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(data)
      })
      .then(response => response.json());
    }
  }

  this.updateActivity = function(config) {
    postData('http://localhost:8080/customer-activity-conversion', {
      event: config.event,
      user_id: config.user_id,
      conversion_event_id: config.conversion_event_id,
      customer_id: Number(this.getCookieValue('customer_id'))
    })
    .then(data => console.log(JSON.stringify(data)))
    .catch(error => console.log(error));
    
    function postData(url = '', data = {}) {
      return fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(data)
      })
      .then(response => response.json());
    }
  }

  this.getCookieValue = function(cookie_name) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + cookie_name + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  }

}

var conversion = new Conversion();

// ./node_modules/.bin/http-server
