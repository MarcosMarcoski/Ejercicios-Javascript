// Ejercicio 54

function nicknameMap(persons) {
    return persons.map(person => `${person.name}-${person.age}`);
  }
  
  const persons = [
    { name: 'Paul', age: 21 },
    { name: 'George', age: 32 },
    { name: 'Lucas', age: 28 }
  ];
  
  const nicknames = nicknameMap(persons);
  console.log(nicknames);
  