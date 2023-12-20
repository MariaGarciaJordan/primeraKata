/**
 * tareas: 
 * test que devuelve Fizz cuando es divisible por 3
 * test que devuelve Buzz cuando es divisible por 5
 * test que devuelve FizzBuzz cuando es divisible por 3 y por 5
 * test que devuelve el numero cuando no es divisible por 3 ni por 5
*/


// hacer imports de la librería
const { expect} = require("@jest/globals");
const FizzBuzz =require("../FizzBuzz")

    describe('Test que validan los múltiplos de 3 y 5', () => {
    test('Test devuelve Fizz cuando divisible por 3', () => {
        
/*** GHERKING TEST
** GIVEN/ ARRANGE: UN NÚMERO
* WHEN / ACT: CUANDO ESTE SEA DIVISIBLE POR 3
* THEN / ASSERT: DEVUELVE FIZZ COMO RESULTADO
*/
//ARRANGE: prepara el escenario (entradas y salidas)
        const numero_ingresado = 3;
        const respuesta_esperada = "Fizz";
        const fizz = new FizzBuzz(); //clases

//Act: ejecuta el escenario

        const respuesta_recibida = fizz.validar_primos_3_5(numero_ingresado); 

//ASSERT: comprueba el escenario

        expect(respuesta_recibida).toBe(respuesta_esperada);


    })

        //otro test

        test('Test devuelve Buzz cuando divisible por 5', () => {
       
/**
 * * Gherking test
 * Given/ Arrange: un numero
* When / Act: cuando sea divisible por 3
* Then / Assert: devuelve fizz como resultado
*/

//Arrange: prepara el escenario (entradas y salidas)
        const numero_ingresado = 5;
        const respuesta_esperada = "Buzz";
        const fizz = new FizzBuzz(); 

//Act: ejecuta el escenario

        const respuesta_recibida = fizz.validar_primos_3_5(numero_ingresado); 

//ASSERT: comprueba el escenario

        expect(respuesta_recibida).toBe(respuesta_esperada);


        });
        
//otro test

        test('Test devuelve FizzBuzz cuando divisible por 3 y por 5', () => {
       
/**
* Gherking test
* Given/ Arrange: un numero
* When / ACT: cuando este sea divisible por 3
* THEN / ASSERT: devuelve fizz como resultado
*/

//ARRANGE: prepara el escenario
        const numero_ingresado = 15;
        const respuesta_esperada = "FizzBuzz";
        const fizz = new FizzBuzz(); //clases

//ACT: ejecuta el escenario

        const respuesta_recibida = fizz.validar_primos_3_5(numero_ingresado); 

//ASSERT: comprueba el escenario

        expect(respuesta_recibida).toBe(respuesta_esperada);
});

//otro test

        test('Test devuelve el numero cuando no es divisible por 3 ni por 5', () => {
       
/**
* Gherking test
* Given/ Arrange: un numero
* When / ACT: cuando este sea divisible por 3 ni por 5
* THEN / ASSERT: devuelve fizz como resultado
*/

//Arrange: prepara el escenario (entradas y salidas)
        const numero_ingresado = 1;
        const respuesta_esperada = numero_ingresado;
        const fizz = new FizzBuzz(); //clases

//Act: ejecuta el escenario

        const respuesta_recibida = fizz.validar_primos_3_5(numero_ingresado); 

 //ASSERT: comprueba el escenario

        expect(respuesta_recibida).toBe(respuesta_esperada);
    })
});


