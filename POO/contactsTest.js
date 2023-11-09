

const Person = require("./person");
const Contacts = require("./contacts");

let hobbiesPerson1 = ["cazar", "pintar"]
let hobbiesPerson2 = ["cantar", "correr"]

let person1 = new Person ("Rafa", 68, 1.7, 1979, hobbiesPerson1);
let person2 = new Person ("Mario", 85, 1.85, 1985, hobbiesPerson2);

let contactPerson = new Contacts();

contactPerson.persons.push(person1);
contactPerson.persons.push(person2);

contactPerson.printPersons();






