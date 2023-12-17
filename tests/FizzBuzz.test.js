const FizzBuzz = require('./fizzbuzz');

describe('Test que validan los múltiplos de 3 y 5', () => {
    test('Test devuelve Fizz cuando es divisible de 3', () => {
        expect(FizzBuzz(3)).toBe('Fizz');
    });

    test('Test devuelve Buzz cuando es divisible de 5', () => {
        expect(FizzBuzz(5)).toBe('Buzz');
    });

    test('Test devuelve FizzBuzz cuando es divisible de 3 y 5', () => {
        expect(FizzBuzz(15)).toBe('FizzBuzz');
    });

    test('Test devuelve el número cuando no es divisible ni por 3 ni por 5', () => {
        expect(FizzBuzz(4)).toBe('4');
    });
});


