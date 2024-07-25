const chai = require("chai");
const expect = chai.expect;
const request = require('request');


describe('testing api', () => {
    it('welcome to system', () => {
      request('http://127.0.0.1:7865/', (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
      });
    });
});
describe('testing api', () => {
    it('welcome to system', () => {
      request('http://127.0.0.1:7865/6', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
      });
    });
    it('welcome to system', () => {
      request('http://127.0.0.1:7865/ahmed', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
      });
    });

});
