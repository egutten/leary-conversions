function Conversion() {

  this.updateCustomer = function(config) {
    var params = {
      email: config.email,
      first_name: config.first_name,
      last_name: config.last_name,
      company_name: config.company_name,
      customer_id: Number(this.getCookieValue('customer_id'))
    }
    xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/customer-update', false);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = function() {
      if (xhr.readyState === 4) {  
          if (xhr.status === 200) {  
            console.log(xhr.responseText)  
          } else {  
             console.log("Error", xhr.statusText);  
          }  
      }  
    };
    xhr.send(JSON.stringify(params));
  }

  this.updateActivity = function(config) {
    var params = {
      event: config.event,
      conversion_event_id: this.getConversionId(45, function(data) {
          return data;
      }),
      user_id: config.user_id,
      customer_id: Number(this.getCookieValue('customer_id'))
    }
    xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/customer-activity-conversion', false);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = function() {
      if (xhr.readyState === 4) {  
          if (xhr.status === 200) {  
            console.log(xhr.responseText)  
          } else {  
             console.log("Error", xhr.statusText);  
          }  
      }  
    };
    xhr.send(JSON.stringify(params));
  }

  this.getCookieValue = function(cookie_name) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + cookie_name + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  }
  
  
  this.getConversionId = function(id, callback) {
    var params = {
      user_id: id
    }
    xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/conversion-id', false);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = function() {
      if (xhr.readyState === 4) {  
          if (xhr.status === 200) { 
            callback(JSON.parse(xhr.responseText));
    
          } else {  
            console.log("Error", xhr.statusText);  
          }  
      }  
    };
    xhr.send(JSON.stringify(params));
  }
  
  this.getConversionId(45, function(data) {
      console.log(data);
  });
}



var conversion = new Conversion();

// ./node_modules/.bin/http-server
