const request = require('request');
const axios = require('axios');

const breed = process.argv.slice(2, 3);

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (err, res, body) => {
    if (err) {
      console.error(err);
    } else {
      const data = JSON.parse(body);
      console.log(data);
      if (data === [] || !data[0]) {
        console.log('Breed not found!');
      } else {
        console.log(data[0].description);
      }
    }
  }
);

// axios(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`)
//   .then((res) => {
//     console.log(res.data);
//     if (res.data == []) {
//       console.log('Breed not found!');
//     } else {
//       console.log(res.data.description);
//     }
//     // res.data !== []
//     //   ? console.log(res.data[0].description)
//     //   : console.log('Breed not found!');
//   })
//   .catch((err) => {
//     console.log(err.response);
//     console.error(err);
//   });
