
// ***RETO6***
// - Guardar la clase Person en un fichero con extensión js person.js
// - Modificar ese fichero para exportar la clase
// - Importar la clase en otro fichero denominado personTest js
// - Crear un objeto de la clase Persona y probar todos sus atributos y métodos


const Person = require("./person");

let hobbies = ["tenis", "padel", "cantar"];
const nuevaPersona = new Person("Luis", 80, 1.85, 1986, hobbies);


console.log(nuevaPersona.calcularEdad());
console.log(nuevaPersona.calcularIMS());
console.log(nuevaPersona.printAll());
console.log(nuevaPersona.printHobbies());


// Sube todos los cambios a tu rama "día1"

//   -->> Enlace de cuenta GIT por si queréis verificar: 
//        https://github.com/rafaelLagoGomez/week_2/tree/dia1/POO
