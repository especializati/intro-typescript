"use strict";
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // this.validate();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// let user = new User('Carlos', 'Ferreira', 30);
// console.log(user.getFullName());
class Admin extends User {
    getFullName() {
        return `Dr. ${this.firstName} ${this.lastName}`;
    }
}
let admin = new Admin('Carlos', 'Ferreira', 30);
console.log(admin.getFullName());
