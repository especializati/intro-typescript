"use strict";
const add = (a, b) => a + b;
const addWithOptionalTax = (a, b, tax) => {
    if (typeof tax != 'undefined') {
        return (a + b) - tax;
    }
    return a + b;
};
// console.log(addWithOptionalTax(2, 2, 1));
// console.log(addWithOptionalTax(2, 2));
const applyDiscount = (price, percentage = 5) => {
    return price - (price * (percentage / 100));
};
// console.log(applyDiscount(100));
const calcTotal = (name, ...numbers) => {
    let total = 0;
    numbers.forEach(num => total += num);
    return total;
};
console.log(calcTotal('Carlos', 2, 3, 5, 10));
