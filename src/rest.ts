
////////////////////////////
interface AnimalProperties {
    species?: string;
    id?: string;
    color?: string;
  }

class Animal {
    species?: string;
    id?: string;
    color?: string;

    constructor(attributes: AnimalProperties = {}) {
        //this = attributes. Assign object attributes to this - SHORT WAY
        Object.assign(this, attributes);
    }
}

const a = new Animal({species: 'Majmun', id: "10", color: 'red'})
console.log(a);
  
