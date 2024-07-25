const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    var bigBrother
    beforeEach(() => {
	bigBrother = sinon.spy(Utils);
    });
    afterEach(() => {
	bigBrother.calculateNumber.restore();
    });
    it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
     sendPaymentRequestToApi(100, 20);
     expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
     expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
    });
    it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
     sendPaymentRequestToApi(10, 10);
     expect(bigBrother.calculateNumber.calledWith('SUM', 10, 10)).to.be.true;
     expect(bigBrother.calculateNumber.callCount).to.be.equal(1);

  });
});
