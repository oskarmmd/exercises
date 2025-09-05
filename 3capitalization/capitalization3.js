const firstName = "Peter";
const lower = firstName.toLowerCase();
const midIndex = Math.floor(firstName.length / 2);
const capLetter = lower[midIndex].toUpperCase();

const result = lower.slice(0, midIndex) + capLetter + lower.slice(midIndex + 1);
console.log(result);
