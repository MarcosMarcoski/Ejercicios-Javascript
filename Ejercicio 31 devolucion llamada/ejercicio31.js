// Ejercicio 31

function sayHelloName(callback) {
  console.log("Hello");
  callback();
}

function printName() {
  console.log("Marcos");
}

sayHelloName(printName);
