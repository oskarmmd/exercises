let lav, høj, gæt, antal;

function start() {
  lav = 1;
  høj = 100;
  antal = 0;
  document.getElementById("startbtn").style.display = "none";
  document.getElementById("lowbtn").classList.remove("hide");
  document.getElementById("highbtn").classList.remove("hide");
  document.getElementById("correctbtn").classList.remove("hide");
  nytgæt();
}

function nytgæt() {
  gæt = Math.floor((lav + høj) / 2);
  antal++;
  document.getElementById("display").textContent = gæt;
}

function lavere() {
  høj = gæt - 1;
  nytgæt();
}

function højere() {
  lav = gæt + 1;
  nytgæt();
}

function korrekt() {
  document.getElementById("display").textContent = `Jeg gættede ${gæt} på ${antal} forsøg!`;
  document.getElementById("startbtn").style.display = "block";
  document.getElementById("lowbtn").classList.add("hide");
  document.getElementById("highbtn").classList.add("hide");
  document.getElementById("correctbtn").classList.add("hide");
}
