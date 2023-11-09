

class Person {

    constructor (nombre, pesoKg, alturaMtr, yearOfBirth, hobbies) {
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

    // printAll() {
    //     let atribute = "";
    //     atribute = `Nombre - ${this.nombre}
    //     AlturaMtr - ${this.alturaMtr}
    //     PesoKg - ${this.pesoKg}
    //     ColorPelo - ${this.colorPelo}
    //     ColorOjos - Negro
    //     Sexo - Hombre
    //     YearOfBirth - ${this.yearOfBirth}`

    //     return atribute;
        
        printAll() {
            for (const atributos in this) {
                console.log(`${atributos} - ${this[atributos]}`);
            }
    
        }
    
    printHobbies() {
        return this.hobbies;
    }

}


module.exports = Person;