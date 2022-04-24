const request = require("request");

const fetchBreedDescription = (breed, cb) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, res, body) => {
    if (err) return cb(err, null);

    const data = JSON.parse(body)[0];
    data ? cb(null, data.desscription) : cb("Uh oh! Cannot find breed!", null);
  });
};

module.exports = { fetchBreedDescription };
