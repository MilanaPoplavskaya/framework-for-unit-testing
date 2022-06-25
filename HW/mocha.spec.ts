import { Calculator } from "./hw_calculator";
import { expect, assert } from "chai";
import * as chai from "chai";

chai.should();
describe(" Calculator. Using mocha + chai", function () {
    it("Check sum: positive", () => {
        const numb1: number = 3;
        const numb2: number = 5;
        const expectedResult: number = 8;
        expect(Calculator.getResultAddition(numb1, numb2)).to.equal(expectedResult);
    });
    it("Check sum: negative", () => {
        const numb1: number = 3;
        const numb2: number = 8;
        const expectedResult: number = 8;
        expect(Calculator.getResultAddition(numb1, numb2)).not.to.equal(expectedResult);
    });
    it("Check the result from subtraction: positive", function () {
        const numb1: number = 10;
        const numb2: number = 5;
        const expectedResult: number = 5;
        expect(Calculator.getResultSubtraction(numb1, numb2)).to.equal(expectedResult);
    });
    it("Check the result from subtraction: negative", function () {
        const numb1: number = 10;
        const numb2: number = 5;
        const expectedResult: number = 10;
        Calculator.getResultSubtraction(numb1, numb2).should.not.to.equal(
            expectedResult,
            `${numb1} - ${numb2} should be not equal ${expectedResult}.`,
        );
    });
    it("Check the result from multiplication: positive", function () {
        const numb1: number = 10;
        const numb2: number = 5;
        const expectedResult: number = 50;
        assert.deepEqual(
            Calculator.getResultMultiplication(numb1, numb2),
            expectedResult,
            `${numb1} * ${numb2} is not equal ${expectedResult}.`,
        );
    });
    it("Check the result from multiplication: negative", function () {
        const numb1: number = 10;
        const numb2: number = 5;
        const expectedResult: number = 500;
        assert.notDeepEqual(
            Calculator.getResultMultiplication(numb1, numb2),
            expectedResult,
            `${numb1} * ${numb2} should be not equal ${expectedResult}.`,
        );
    });
    it("Check the result from division: positive", function () {
        const numb1: number = 10;
        const numb2: number = 5;
        const expectedResult: number = 2;
        Calculator.getResultDivision(numb1, numb2).should.to.equal(
            expectedResult,
            `${numb1} / ${numb2} is not equal ${expectedResult}.`,
        );
    });
    it("Check the result from division: negative", function () {
        const numb1: number = 10;
        const numb2: number = 5;
        const expectedResult: number = 20;
        Calculator.getResultDivision(numb1, numb2).should.not.to.equal(
            expectedResult,
            `${numb1} / ${numb2} should be not equal ${expectedResult}.`,
        );
    });
    it("Check the result from exponentiation: positive", () => {
        const numb1: number = 3;
        const numb2: number = 5;
        const expectedResult: number = 243;
        expect(Calculator.getResultExponentiation(numb1, numb2)).to.equal(
            expectedResult,
            `${numb1} ** ${numb2} is not equal ${expectedResult}.`,
        );
    });
    it("Check the result from exponentiation: negative", () => {
        const numb1: number = 3;
        const numb2: number = 5;
        const expectedResult: number = 24;
        expect(Calculator.getResultExponentiation(numb1, numb2)).to.not.equal(
            expectedResult,
            `${numb1} ** ${numb2} should be not equal ${expectedResult}.`,
        );
    });
});
