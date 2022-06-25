import { Calculator } from "./hw_calculator";

describe("Calculator. Using jest", function () {
    test("Check sum: positive", () => {
        const numb1: number = 10;
        const numb2: number = 15;
        const expectedResult: number = 25;
        expect(Calculator.getResultAddition(numb1, numb2)).toEqual(expectedResult);
    });
    test("Check sum: negative", () => {
        const numb1: number = 10;
        const numb2: number = 15;
        const expectedResult: number = 95;
        expect(Calculator.getResultAddition(numb1, numb2)).not.toEqual(expectedResult);
    });
    test("Check the result from subtraction: positive", () => {
        const numb1: number = 10;
        const numb2: number = 15;
        const expectedResult: number = -5;
        expect(Calculator.getResultSubtraction(numb1, numb2)).toBe(expectedResult);
    });
    test("Check the result from subtraction: negative", () => {
        const numb1: number = 10;
        const numb2: number = 15;
        const expectedResult: number = 25;
        expect(Calculator.getResultSubtraction(numb1, numb2)).not.toBe(expectedResult);
    });
    test("Check the result from multiplication: positive", () => {
        const numb1: number = 10;
        const numb2: number = 15;
        const expectedResult: number = 150;
        expect(Calculator.getResultMultiplication(numb1, numb2)).toEqual(expectedResult);
    });
    test("Check the result from multiplication: negative", () => {
        const numb1: number = 10;
        const numb2: number = 15;
        const expectedResult: number = 250;
        expect(Calculator.getResultMultiplication(numb1, numb2)).not.toEqual(expectedResult);
    });
    test("Check the result from division: positive", () => {
        const numb1: number = 10;
        const numb2: number = 2;
        const expectedResult: number = 5;
        expect(Calculator.getResultDivision(numb1, numb2)).toBe(expectedResult);
    });
    test("Check the result from division: negative", () => {
        const numb1: number = 10;
        const numb2: number = 2;
        const expectedResult: number = 15;
        expect(Calculator.getResultDivision(numb1, numb2)).not.toBe(expectedResult);
    });
    test("Check the result from exponentiation: positive", () => {
        const numb1: number = 10;
        const numb2: number = 2;
        const expectedResult: number = 100;
        expect(Calculator.getResultExponentiation(numb1, numb2)).toEqual(expectedResult);
    });
    test("Check the result from exponentiation: negative", () => {
        const numb1: number = 10;
        const numb2: number = 2;
        const expectedResult: number = 10;
        expect(Calculator.getResultExponentiation(numb1, numb2)).not.toEqual(expectedResult);
    });
});