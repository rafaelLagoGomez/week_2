
// ***RETO8***
// Guardar la clase Contacts en un fichero con extensión .js (contacts.js).
// Modificar ese fichero para exportar la clase. 
// Importar la clase en otro fichero denominado contactsTest.js
// Crear un objeto de la clase Contacts y probar todos sus atributos y métodos.

class Person {

    constructor (nombre, pesoKg, alturaMtr, yearOfBirth) {
        this.nombre = nombre;        
        this.alturaMtr = alturaMtr;
        this.pesoKg = pesoKg;
        this.colorPelo = "negro";
        this.colorOjos = "verdes";
        this.sexo = "hombre";
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
    }

    calcularIMS() {
        const result = this.pesoKg / this.alturaMtr**2;
        return result;
    }

    calcularEdad() {
        const result = 2023 - this.yearOfBirth;
        return result;
    }

    printAll() {
        for (const atributos in this) {
            console.log(`${atributos} - ${this[atributos]}`);
        }
        
    }

    printHobbies() {
        console.log(this.hobbies);
    }

}

class Contacts {

    constructor() {
        this.person = [new Person("Dani", 70, 1.74, 1982)];
    }

    printPersons() {
        for (let i = 0; i < this.person.length; i++);
        console.log(this.person);
    }
}


let hobbies = ["escalada", "leer", "dormir"];

const yo = new Person ("Rafa", 68, 1.7, 1979);
const contactoPerson = new Contacts();

contactoPerson.printPersons();

yo.calcularEdad();
yo.calcularIMS();
yo.printAll();
yo.printHobbies();


module.exports = {Person, Contacts}


// NO CONSIGO REALIZAR ESTE RETO8-ContactTest DE IMPORTAR AMBAS CLASES

