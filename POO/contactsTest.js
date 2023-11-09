
// ***RETO8***
// Guardar la clase Contacts en un fichero con extensión .js (contacts.js).
// Modificar ese fichero para exportar la clase. 
// Importar la clase en otro fichero denominado contactsTest.js
// Crear un objeto de la clase Contacts y probar todos sus atributos y métodos.

const Person = require("./person");
const Contacts = require("./contacts");

let contactPerson = new Contacts();

let person1 = new Person ("Rafa", 68, 1.7, 1979);
let person2 = new Person ("Mario", 85, 1.85, 1985);

contactPerson = [person1, person2];

console.log(contactPerson);






