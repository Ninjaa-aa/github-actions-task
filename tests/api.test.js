const request = require('supertest');
const { app, server } = require('../src/index');

describe('API Endpoints', () => {
  afterAll(done => {
    // Close the server after all tests
    server.close(done);
  });

  describe('GET /', () => {
    it('should return Hello, World!', async () => {
      const res = await request(app).get('/');
      
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('message');
      expect(res.body.message).toBe('Hello, World!');
    });
  });
}); 