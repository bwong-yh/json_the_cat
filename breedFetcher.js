const request = require("request");
const breed = process.argv[2];

const getData = breed => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, res, body) => {
    const data = JSON.parse(body)[0];
    console.log(data.description);
  });
};

getData(breed);
