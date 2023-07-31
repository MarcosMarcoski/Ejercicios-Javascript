
// Ejercicio 39

function multiplyByTwo(number) {
    let value = 2;
  
    function inner() {
      return number * value;
    }
  
    console.log(inner());
  }
  
  multiplyByTwo(5); // Imprimirá 10 en la consola
  