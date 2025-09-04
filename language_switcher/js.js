"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const locale = "da";

function render(locale) {
  texts[locale].texts.forEach((item) => {
    document.querySelector(item.location).textContent = item.text;
  });
}

const select = document.getElementById("language");

render(select.value);

select.addEventListener("change", (e) => {
  render(e.target.value);
});
