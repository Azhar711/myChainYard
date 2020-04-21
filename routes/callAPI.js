const request = require("request");

const apiCall = (url, callback) => {
  request.get(url, (error, response) => {
    if (error) {
      callback("Error Connecting to Service", undefined);
    } else if (response) {
      callback(undefined, response);
    }
  });
};

module.exports = apiCall;
