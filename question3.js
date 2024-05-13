// store a person's name in a variable,then print that person name in a lower case,upper case and title case.
var personName = "Bushra Ali";
// lowercase
console.log("lowercase:", personName.toLowerCase());
// uppercase
console.log("uppercase:", personName.toUpperCase());
// titlecase
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
