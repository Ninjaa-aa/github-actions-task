const request = require('supertest');
const app = require('../src/index');

describe('API Endpoints', () => {
  it('GET / should return Hello, World!', async () => {
    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Hello, World!');
  });
});