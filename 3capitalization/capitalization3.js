const firstName = "Peter";
const lower = firstName.toLowerCase();

// løsning midterbogstav
// const midIndex = Math.floor(firstName.length / 2);
// const capLetter = lower[midIndex].toUpperCase();

// const result = lower.slice(0, midIndex) + capLetter + lower.slice(midIndex + 1);
// console.log(result);

// løsning første bogstav
const firstIndex = 0;
const capLetter = lower[firstIndex].toUpperCase();

const result = capLetter + lower.slice(1);
console.log(result);
