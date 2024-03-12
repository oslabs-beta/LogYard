/* eslint-disable no-undef */
import { expect, test, TestFunction } from 'vitest';
import request, { SuperTest, Test, Response } from 'supertest';
const server: string = 'http://localhost:3333';
import dotenv from 'dotenv';

// config dotenv to allow process.env to be used
dotenv.config();

// Cookie value provided in /auth testing suite and used in /logs testing suite
let cookieValue: string | undefined;

/* Testing suite for /auth route */

const authTest: TestFunction = () => {
  return request(server)
    .post('/api/auth')
    .send({
      serverPassword: process.env.VITE_USER_PASSWORD,
    })
    .expect(200);
};
test(
  '/auth responds to POST request with 200 status when provided with correct password',
  authTest
);

const wrongPasswordTest: TestFunction = () => {
  return request(server)
    .post('/api/auth')
    .send({
      serverPassword: 'wrongPassword',
    })
    .expect(401);
};

test(
  '/auth responds to POST request with 200 status when provided with incorrect password',
  wrongPasswordTest
);

const assignCookieTest: TestFunction = async () => {
  const req = await request(server).post('/api/auth').send({
    serverPassword: process.env.VITE_USER_PASSWORD,
  });

  let cookies: string[] = [];
  const setCookieHeader = req.headers['set-cookie'];

  if (Array.isArray(setCookieHeader)) {
    cookies = setCookieHeader;
  } else if (typeof setCookieHeader === 'string') {
    cookies.push(setCookieHeader);
  }
  cookieValue = cookies[0];
  expect(cookies).toBeDefined();
};

test('assigns a cookie upon successful login', assignCookieTest);

/* Testing suite for /logs route */

const logs200Test: TestFunction = () => {
  if (cookieValue) {
    return request(server)
      .get('/api/logs')
      .set('Cookie', cookieValue)
      .expect(200);
  } else {
    throw new Error('Cookie value not set');
  }
};
test(
  '/logs responds to GET request with 200 status when cookie is present',
  logs200Test
);

const logsContentTypeTest: TestFunction = () => {
  if (cookieValue) {
    return request(server)
      .get('/api/logs')
      .set('Cookie', cookieValue)
      .expect('Content-Type', /application\/json/);
  } else {
    throw new Error('Cookie value not set');
  }
};

test(
  '/logs responds to GET request with application/json content-type',
  logsContentTypeTest
);

const logsArrayTest: TestFunction = async () => {
  if (cookieValue) {
    const res = await request(server)
      .get('/api/logs')
      .set('Cookie', cookieValue);
    // checks if something exists where array should be
    expect(res.body).toBeDefined();
    // checks if array exists
    expect(Array.isArray(res.body)).toBeTruthy();
  } else {
    throw new Error('Cookie value not set');
  }
};

test(
  '/logs returns an array of object--the logs from the database',
  logsArrayTest
);
