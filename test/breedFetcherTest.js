// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert, expect } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
        'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ';

      // compare returned description
      expect(desc).to.equal(expectedDesc);
      done();
    });
  });

  it('returns "Breed not found" for a invalid breed, via callback', (done) => {
    fetchBreedDescription('Sibaaaa', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = 'Breed not found';
      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
});
