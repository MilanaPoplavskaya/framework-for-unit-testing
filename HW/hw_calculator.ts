export class Calculator {
    static getResultAddition(firstParameter: number, secondParameter: number): number {
        return firstParameter + secondParameter;
    }

    static getResultSubtraction(firstParameter: number, secondParameter: number) {
        return firstParameter - secondParameter;
    }

    static getResultMultiplication(firstParameter: number, secondParameter: number) {
        return firstParameter * secondParameter;
    }

    static getResultDivision(firstParameter: number, secondParameter: number) {
        return firstParameter / secondParameter;
    }

    static getResultExponentiation(firstParameter: number, secondParameter: number) {
        return firstParameter ** secondParameter;
    }
}
