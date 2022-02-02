const { fetchBreedDescription } = require('../breedFetcher');
const assert = require('chai').assert;

describe('fetchBreedDescription', () => {
  it('returns a string descriptions for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.';

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns an error for and invalid cat breed', (done) => {
    fetchBreedDescription('notacat', (err, desc) => {
      assert.equal(desc, null);
  
      const expectedErr = 'Cat breed notacat not found';

      assert.equal(expectedErr, err.trim());

      done();
    });
  });
});