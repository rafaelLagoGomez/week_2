
// ***RETO8***
// Guardar la clase Contacts en un fichero con extensión .js (contacts.js).
// Modificar ese fichero para exportar la clase. 
// Importar la clase en otro fichero denominado contactsTest.js
// Crear un objeto de la clase Contacts y probar todos sus atributos y métodos.


const Person = require("./person");

class Contacts {

    constructor() {
        this.persons = [];
    }

    printPersons() {
        let atributos ="";
        for (let i = 0; i < this.persons.length; i++);
        atributos =+ this.persons[i];
        
        return atributos
    }
    
}



module.exports = Contacts
module.exports = Person





