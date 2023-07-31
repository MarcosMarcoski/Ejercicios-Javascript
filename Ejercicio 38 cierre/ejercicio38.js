
// Ejercicio 38


function printName() {
    let helloName = "Hello John";
  
    function inner() {
      return helloName;
    }
    setTimeout(function () {
        helloName = "Hello John";
      }, 1000);
    return inner;
  }
  
  const closureFunction = printName();
  console.log(closureFunction());

  setTimeout(function () {
    console.log(closureFunction());
  }, 1000);