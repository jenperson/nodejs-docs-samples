const path = require('path');
const supertest = require('supertest');
const app = require(path.join(__dirname, '../', 'server.js'));

describe('gae_flex_metadata', () => {
  it('should be listening', async () => {
    await supertest(app).get('/').expect(200);
  });
});
