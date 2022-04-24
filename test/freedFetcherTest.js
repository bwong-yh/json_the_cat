const { assert } = require("chai");
const { fetchBreedDescription } = require("../breedFetcher");

describe("fetchBreedDescription", () => {
  it("returns an error message for a invalid/non-existent breed", done => {
    fetchBreedDescription("", (err, description) => {
      assert.strictEqual(err, "Uh oh! Cannot find breed!");

      // ensuring that nothing is returned for descirption when there's an error
      assert.strictEqual(description, null);

      done();
    });
  });

  it("returns a string description for a specified breed via callback", done => {
    fetchBreedDescription("sib", (err, description) => {
      const expectedDescription =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.strictEqual(description.trim(), expectedDescription);

      // ensuring no error is returned
      assert.strictEqual(err, null);

      done();
    });
  });
});
