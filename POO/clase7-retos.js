
// ***RETO1***
//  1.1 Creo en GitHub repositorio week_2. Lo clono a Visual, y creo 4 ramas por días.
//  1.2 Me paso a la rama día1
//  1.3 Creo carpeta POO

//  1.4 Crea la clase Person de la manera más completa que se te ocurra.
//  Su constructor debetener como mínimo 2 parámetros de entrada

class Person1 {

    constructor (pesoKg, alturaMtr) {
        this.nombre;        
        this.alturaMtr = alturaMtr;
        this.pesoKg = pesoKg;
        this.colorPelo;
        this.colorOjos;
        this.sexo;
    }
}


// ***RETO2***
// Utilizando la clase Person definida en el punto anterior, haz que se pueda
// calcular el IMC (índice de mas corporal) de cualquier persona que se haya 
// creado como un objeto de la clase .
// (copio y pego class, y hago un person2 para poder añadir el reto2, y esté todo
// ordenado.

class Person2 {

    constructor (pesoKg, alturaMtr) {
        this.nombre;        
        this.alturaMtr = alturaMtr;
        this.pesoKg = pesoKg;
        this.colorPelo;
        this.colorOjos;
        this.sexo;
    }

    calcularIMS() {
        const result = this.pesoKg / this.alturaMtr**2;
        return result;
    }
}

const yo2 = new Person2 (68, 1.7);
console.log("El IMS de esta persona es " + yo2.calcularIMS());



// ***RETO3***
// Añadir el atributo yearOfBirth a la clase Person e implementar el método edad 
// que tome como parámetro el año y calcule la edad de la persona

class Person3 {

    constructor (pesoKg, alturaMtr, yearOfBirth) {
        this.nombre;        
        this.alturaMtr = alturaMtr;
        this.pesoKg = pesoKg;
        this.colorPelo;
        this.colorOjos;
        this.sexo;
        this.yearOfBirth = yearOfBirth;
    }

    calcularIMS() {
        const result = this.pesoKg / this.alturaMtr**2;
        return result;
    }

    calcularEdad() {
        const result = 2023 - this.yearOfBirth;
        return result;
    }

}

const yo3 = new Person3 (68, 1.7, 1979);
console.log("La edad de esta persona es " + yo3.calcularEdad());


// ***RETO4***
// Añadir un método que se denomine printAll que muestre por consola
// cada uno de los atributos de la clase Person seguido por "-" y el 
// valor atributo

class Person4 {

    constructor (nombre, pesoKg, alturaMtr, yearOfBirth) {
        this.nombre = nombre;        
        this.alturaMtr = alturaMtr;
        this.pesoKg = pesoKg;
        this.colorPelo = "negro";
        this.colorOjos = "verdes";
        this.sexo = "hombre";
        this.yearOfBirth = yearOfBirth;
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

}
const yo4 = new Person4 ("Rafa", 68, 1.7, 1979);
yo4.printAll();



// ***RETO5***
// Añadir el atributo hobbies a la clase Person que es un array de strings
//  y crear un método denominado printHobbies que muestre por consola 
//  las aficiones de la persona

class Person5 {

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
const yo5 = new Person5 ("Rafa", 68, 1.7, 1979);
yo5.printHobbies();


// ***RETO6***   
// - Guardar la clase Person en un fichero con extensión js person.js
// - Modificar ese fichero para exportar la clase
// - Importar la clase en otro fichero denominado personTest js
// - Crear un objeto de la clase Persona y probar todos sus atributos y métodos
// ESTO CONTINUA EN LOS ARCHIVOS person.js y personTest.js ----->>>


// ***RETO7***
// Crear una clase que se llame Contacts que tenga un atributo que sea 
// un array de objetosde la clase Person. No olvides seguir trabajando 
// desde tu rama ”dia 1" 
// • El constructor de la clase Contacts no debe tener parámetros de 
// entrada pero debe inicializar el array
// • Crear un método llamado printPersons que imprima cada uno de los 
// atributos de cada objeto Person

class Contacts {

    constructor() {
        this.person5 = [new Person5("Dani", 70, 1.74, 1982)];
    }

    printPersons() {
        for (let i = 0; i < this.person5.length; i++);
        console.log(this.person5);
    }
}

const contactoPerson = new Contacts();
contactoPerson.printPersons();



// ***RETO8***
// Guardar la clase Contacts en un fichero con extensión .js (contacts.js).
// Modificar ese fichero para exportar la clase. 
// Importar la clase en otro fichero denominado contactsTest.js
// Crear un objeto de la clase Contacts y probar todos sus atributos y métodos.
// Sube tods los cambios a tu rama "dia1" y después haz merge con tu rama "main".
// En caso de tener conflicto soluciónalos.
// ESTO CONTINUA EN LOS ARCHIVOS contacts.js y contactsTest.js ----->>>