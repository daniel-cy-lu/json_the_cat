const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, res, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length > 0) {
      callback(err, data[0].description);
    } else {
      callback(`Cat breed ${breed} not found`, null);
    }
  });
};

module.exports = { fetchBreedDescription };
