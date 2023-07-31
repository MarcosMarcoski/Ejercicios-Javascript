// Ejercicio 32

function sayHelloName(callback) {
  setTimeout(function () {
    console.log("Hola");
    callback();
  }, 1000);
}

function printName() {
  console.log("Marcos");
}

sayHelloName(printName);
