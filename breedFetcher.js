const request = require("request");
const breed = process.argv[2];

const getData = (breed, cb) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, res, body) => {
    if (err) return cb(err, null);

    const data = JSON.parse(body)[0];
    data ? cb(null, data) : cb("Uh oh! Cannot find breed!", null);
  });
};

getData(breed, (err, data) => {
  const { description } = data;
  err ? console.log(err) : console.log(description);
});
