// Ejercicio 22

let primitive = "hola!";

// switch

switch (typeof primitive) {
  case "number":
    console.log("La variable primitive es de tipo numérico.");
    break;

  case "string":
    console.log("la  variable primitive es de tipo string");
    break;
  case "boolean":
    console.log("la  variable primitive es de tipo boolean");
    break;

  default:
    console.log("la variable primitive tiene un tipo no reconocido");
}
