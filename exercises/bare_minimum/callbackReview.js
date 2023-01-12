/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, dataHandler) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      dataHandler(err, null);
    } else {
      var line = data.slice(0, data.indexOf('\n'));
      dataHandler(null, line);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, urlHandler) {
  request.get(url, (err, response, body) => {
    if (err) {
      urlHandler(err, null);
      console.log('ERROR!', err);
    } else {
      urlHandler(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
