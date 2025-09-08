const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const textEl = document.getElementById("tekst");
const btnEl = document.getElementById("proffilter");
btnEl.addEventListener("click", handleClick);
const dialogEl = document.getElementById("info");
let cleaned = false;

function handleClick(event) {
  if (cleaned === false) {
    let text = textEl.textContent;
    curseWords.forEach((pair) => {
      text = text.replaceAll(pair.bad, pair.good);
    });
    textEl.textContent = text;
    console.log("Skal erstatte ord nu...");
    cleaned = true;
  } else {
    console.log("Har allerede erstattet ord");
    dialogEl.showModal();
  }
}
