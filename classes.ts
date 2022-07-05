class User {
  protected readonly firstName: string;
  protected lastName: string;
  protected age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    // this.validate();
  }

  public getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
// let user = new User('Carlos', 'Ferreira', 30);
// console.log(user.getFullName());

class Admin extends User {
  public getFullName() {
    return `Dr. ${this.firstName} ${this.lastName}`;
  }
}
let admin = new Admin('Carlos', 'Ferreira', 30);
console.log(admin.getFullName());
