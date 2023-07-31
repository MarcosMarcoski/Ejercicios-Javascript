
// Ejercicio 44


const smartphone = {
    brand: "Apple",
    name: "Iphone 13",
    price: 1300,
    };
    
    smartphone.price = 100;
    
    console.log(smartphone);

    Object.freeze(smartphone);

    smartphone.brand = "samsung"

    // No cambiará el valor de la propiedad brand al ejecutar Object.freeze(smartphone)