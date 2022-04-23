const breed = process.argv[2];
const { fetchBreedDescription } = require("./breedFetcher");

fetchBreedDescription(breed, (err, description) => {
  err ? console.log(err) : console.log(description);
});
