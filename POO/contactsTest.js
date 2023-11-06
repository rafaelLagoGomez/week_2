
// ***RETO8***
// Guardar la clase Contacts en un fichero con extensión .js (contacts.js).
// Modificar ese fichero para exportar la clase. 
// Importar la clase en otro fichero denominado contactsTest.js
// Crear un objeto de la clase Contacts y probar todos sus atributos y métodos.

const contactsTest = require("./contacts");

const contactPerson = new contactsTest("Luis", 80, 1.85, 1986);

console.log(contactPerson.yo.calcularEdad())

// NO CONSIGO REALIZAR ESTE RETO8-ContactTest DE IMPORTAR AMBAS CLASES