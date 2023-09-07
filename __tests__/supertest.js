/* eslint-disable no-undef */
import request from 'supertest';
const server = 'http://localhost:3000';
import dotenv from 'dotenv';

// config dotenv to allow process.env to be used
dotenv.config();

describe('router integration', () => {
  
  // used to set cookie in /logs get request
  let cookieValue;

  describe('/auth', () => {
    describe('GET', () => {
      it('responds with 200 status with correct password', () => {
        return request(server)
          .get('/auth')
          .query({
            password: process.env.VITE_USER_PASSWORD,
          })
          .expect(200);
      });
      it('responds with 401 status with incorrect password', () => {
        return request(server)
          .get('/auth')
          .query({
            password: 'wrongPassword',
          })
          .expect(401);
      });
      it('assigns a cookie upon successful login', () => {
        return request(server)
          .get('/auth')
          .query({
            password: process.env.VITE_USER_PASSWORD,
          })
          .then((req, res) => {
            const cookies = req.headers['set-cookie'];
            // set cookie value above
            cookieValue = cookies;
            expect(cookies).toBeDefined();
          });
      });
    });
  });

  describe('/logs', () => {
    describe('GET (with a supplied cookie)', () => {
      it('responds with 200 status', () => {
        return request(server)
          .get('/logs')
          .set('Cookie', cookieValue)
          .expect(200);
      });
      it('responds with application/json content-type', () => {
        return request(server)
          .get('/logs')
          .set('Cookie', cookieValue)
          .expect('Content-Type', /application\/json/);
      });
      it('returns array of objects - the logs from database', () => {
        return request(server)
          .get('/logs')
          .set('Cookie', cookieValue)
          .then((res) => {
            // checks if something exists where array should be
            expect(res.body).toBeDefined();
            // checks if array exists
            expect((res) => {
              if (!res.body.isArray()) throw new Error('Not an array.');
            });
          });
      });
    });
  });
});
