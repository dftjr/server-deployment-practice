'use strict';

const supertest = require('supertest');
const app = require('../server.js');
const request = supertest(app); // provide express 'app' singleton;

describe('Testing our HTTP Server', () => {
    test('Should return an object with a name property, on GET to /hello', async () => {
        let response = await request.get('/hello');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('DAVID');
    });

    test('Should return an object with a name property, on GET to /params/:name', async () => {
        let response = await request.get('/params/david');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('david');
    });

    test('Should return an object with a name property and role property, on GET to /query?name=david&role=student', async () => {
        let response = await request.get('/query?name=David&role=student');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('David');
        expect(response.body.role).toEqual('student');
    });
});
