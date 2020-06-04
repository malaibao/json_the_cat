const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (err, res, body) => {
      if (err) {
        callback(err, null);
      } else {
        const data = JSON.parse(body);
        // console.log(data);
        if (data === [] || !data[0]) {
          callback(null, 'Breed not found');
        } else {
          callback(null, data[0].description);
        }
      }
    }
  );
};

module.exports = { fetchBreedDescription };
