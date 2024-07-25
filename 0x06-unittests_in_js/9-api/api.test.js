const chai = require("chai");
const expect = chai.expect;
const request = require('request');

describe('testing api', () => {
    it('welcome to system 0', () => {
      request('http://127.0.0.1:7865/', (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
      });
    });

    it('welcome to system 1', () => {
      request('http://127.0.0.1:7865/cart/6', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
	expect(body).to.be.equal('Payment methods for cart 6');
      });
    });

    it('welcome to system 2', () => {
      request('http://127.0.0.1:7865/cart/ahmed', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
      });
    });


    it('welcome to system 3', () => {
      request('http://127.0.0.1:7865/cart/-6', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
      });
    });

 });
