// numbers
let name_var: number = 321;
name_var = 123;
name_var = 1.2;
name_var = 0xFA;
console.log(name_var);

// booleano
let active: boolean = true

// string
let firstName = 'Carlos'
let lastName = 'Ferreira'
let fullName: string = `${firstName} ${lastName}`

// Enums
enum ROLES {
  MANAGER = 'manager',
  ADMIN = 'Admin',
  CEO = 'CEO',
  CTO = 'CTO'
};
function setRole(role: ROLES): void {

}
setRole(ROLES.CEO);

// arrays
let names = ['Carlos', 'Eti', 'EspecializaTi', true, 1];
let names1: string[] = ['Carlos', 'Eti'];
let names2: Array<string> = ['Carlos', 'Eti'];
let names3: Array<any> = ['Carlos', 'Eti', true, 0xFA];
