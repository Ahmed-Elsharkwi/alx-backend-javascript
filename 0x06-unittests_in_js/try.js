const request = require('request')
request('http://127.0.0.1:7865/', function (error, response, body) {
          console.error('error:', error); // Print the error if one occurred
          console.log('statusCode:', response && response.statusCode);
          console.log('body:', body);
      });
