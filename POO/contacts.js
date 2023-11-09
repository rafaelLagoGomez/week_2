

class Contacts {

    constructor() {
        this.persons = [];
    }

    printPersons() {
        for (let i = 0; i < this.persons.length; i++) {
            this.persons[i].printAll();
        }
        
    }
    
}

module.exports = Contacts






