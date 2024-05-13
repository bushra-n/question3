// store a person's name in a variable,then print that person name in a lower case,upper case and title case.

let personName:string="Bushra Ali";

// lowercase
console.log("lowercase:",personName.toLowerCase());
// uppercase
console.log("uppercase:",personName.toUpperCase());
// titlecase
console.log("titlecase:",personName.replace(/\b\w/g,c=>c.toUpperCase()));
