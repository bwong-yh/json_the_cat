const { assert } = require("chai");
const { fetchBreedDescription } = require("../breedFetcher");

describe("fetchBreedDescription", () => {
  it("returns an error message for a invalid/non-existent breed", done => {
    fetchBreedDescription("", (err, description) => {
      assert.strictEqual(err, "Uh oh! Cannot find breed!");
      done();
    });
  });
});
