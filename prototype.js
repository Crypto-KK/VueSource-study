'use strict';

function Cat(name) {
    this.name = name
}

Cat.prototype.say = function () {
    return `Hello, ${this.name}!`
};



class Student {
    constructor(name) {
        this.name = name;
    }
    hello () {
        alert(`hello ${this.name}`)
    }
}
let kk = new Student('kk');
console.log(kk instanceof Student)
