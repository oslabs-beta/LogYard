/* eslint-disable no-undef */
import { expect, test } from 'vitest';
import request from 'supertest';
const server = 'http://localhost:3000';
import dotenv from 'dotenv';

// config dotenv to allow process.env to be used
dotenv.config();

// Cookie value provided in /auth testing suite and used in /logs testing suite
let cookieValue;

/* Testing suite for /auth route */

test('/auth responds to POST request with 200 status when provided with correct password', () => {
  return request(server)
    .post('/auth')
    .send({
      serverPassword: process.env.VITE_USER_PASSWORD,
    })
    .expect(200);
});

test('/auth responds to POST request with 200 status when provided with correct password', () => {
  return request(server)
    .post('/auth')
    .send({
      serverPassword: 'wrongPassword',
    })
    .expect(401);
});

test('assigns a cookie upon successful login', () => {
  return request(server)
    .post('/auth')
    .send({
      serverPassword: process.env.VITE_USER_PASSWORD,
    })
    .then((req, res) => {
      const cookies = req.headers['set-cookie'];
      // set cookie value above
      cookieValue = cookies;
      expect(cookies).toBeDefined();
    });
});

/* Testing suite for /logs route */

test('/logs responds to GET request with 200 status when cookie is present', () => {
  return request(server).get('/logs').set('Cookie', cookieValue).expect(200);
});

test('/logs responds to GET request with application/json content-type', () => {
  return request(server)
    .get('/logs')
    .set('Cookie', cookieValue)
    .expect('Content-Type', /application\/json/);
});

test('/logs returns an array of object--the logs from the database', () => {
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
