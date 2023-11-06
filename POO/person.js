
// ***RETO6***
// - Guardar la clase Person en un fichero con extensión js person.js
// - Modificar ese fichero para exportar la clase
// - Importar la clase en otro fichero denominado personTest js
// - Crear un objeto de la clase Persona y probar todos sus atributos y métodos

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

let hobbies = ["pintar", "correr", "cantar"];
const yo = new Person ("Rafa", 68, 1.7, 1979);
yo.printHobbies();

module.exports = Person;