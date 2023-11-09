
const Person = require("./person");

let hobbies = ["tenis", "padel", "cantar"];
const nuevaPersona = new Person("Luis", 80, 1.85, 1986, hobbies);


console.log(nuevaPersona.calcularEdad());
console.log(nuevaPersona.calcularIMS());
console.log(nuevaPersona.printAll());
console.log(nuevaPersona.printHobbies());



