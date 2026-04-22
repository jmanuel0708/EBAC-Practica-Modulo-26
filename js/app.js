"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAge = (date) => {
    const birthDate = new Date(date);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age -= 1;
    }
    return age;
};
console.log(`El usuario con fecha de nacimiento el 08 de Julio del 2002 tiene ${getAge("2002-07-08")} años`);
console.log(`El usuario con fecha de nacimiento el 03 de Diciembre del 2007 tiene ${getAge("2007-12-03")} años`);
console.log(`El usuario con fecha de nacimiento el 30 de Marzo del 2000 tiene ${getAge("2000-03-30")} años`);
//# sourceMappingURL=app.js.map