
// Ejercicio 52

const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
  ];
  
  // Eliminar el último elemento de la matriz
  students.pop();
  
  // Agregar el nuevo objeto al final de la matriz
  const newStudent = { id: 3, name: "Francesco", surname: "Verdi", age: 41 };
  students.push(newStudent);
  
  console.log(students);
  