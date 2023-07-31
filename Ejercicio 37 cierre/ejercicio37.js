// Ejercicio 37


function printName() {
    let helloName = "Hello John";
  
    function inner() {
      return helloName;
    }
  
    return inner;
  }
  
  const closureFunction = printName();
  console.log(closureFunction()); // Imprimirá "Hello John"
  
