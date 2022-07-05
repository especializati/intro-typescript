"use strict";
// numbers
let name_var = 321;
name_var = 123;
name_var = 1.2;
name_var = 0xFA;
console.log(name_var);
// booleano
let active = true;
// string
let firstName = 'Carlos';
let lastName = 'Ferreira';
let fullName = `${firstName} ${lastName}`;
// Enums
var ROLES;
(function (ROLES) {
    ROLES["MANAGER"] = "manager";
    ROLES["ADMIN"] = "Admin";
    ROLES["CEO"] = "CEO";
    ROLES["CTO"] = "CTO";
})(ROLES || (ROLES = {}));
;
function setRole(role) {
}
setRole(ROLES.CEO);
// arrays
let names = ['Carlos', 'Eti', 'EspecializaTi', true, 1];
let names1 = ['Carlos', 'Eti'];
let names2 = ['Carlos', 'Eti'];
let names3 = ['Carlos', 'Eti', true, 0xFA];
