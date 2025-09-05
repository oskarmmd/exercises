const name = "Peter Heronimous Lind";
const firstSpace = name.indexOf(" ");
const lastSpace = name.lastIndexOf(" ");

const firstName = name.substring(0, firstSpace);
const middleName = name.substring(firstSpace + 1, lastSpace);
const lastName = name.substring(lastSpace + 1);

console.log(name);
console.log(firstName);
console.log(middleName);
console.log(lastName);

// const firstName = string.substring(0, 5);
// const middleName = string.substring(6, 16);
// const lastName = string.substring(17);
