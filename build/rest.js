"use strict";
class Animal {
    constructor(attributes = {}) {
        //this = attributes. Assign object attributes to this - SHORT WAY
        Object.assign(this, attributes);
    }
}
const a = new Animal({ species: 'Majmun', id: "10", color: 'red' });
console.log(a);
