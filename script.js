window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemFormazas1();
  esemenyKezeles1();
  esemenyKezeles2();
  esemenyKezeles3();
  esemenyKezeles4();
});

function elemekElerese1() {
  const ELEM = document.querySelectorAll("section h2")[0];
  console.log(ELEM);
}
function elemekElerese2() {
  const ELEM = document.querySelectorAll("#ide")[0];
  ELEM.innerHTML = "Jó reggelt!";
}
function elemekElerese3() {
  const ELEM = document.querySelectorAll(".ide")[0];
  ELEM.innerHTML = "Jó reggelt!";
}
function elemekElerese4() {
  const ELEM = document.querySelectorAll(".lista")[0];
  let lista = [];
  let txt = "<ul>";
  for (let index = 0; index < 5; index++) {
    txt += `<li>${(lista[index] = Math.floor(Math.random() * 20) + 10)}</li>`;
  }
  txt += "</ul>";
  ELEM.innerHTML = txt;
}
function elemFormazas1() {
  const ELEM = document.querySelectorAll(".lista")[0];
  ELEM.classList.add("formazott");
}
function esemenyKezeles1() {
  const ELEM = document.querySelectorAll(".lista")[0];
  ELEM.addEventListener("click", kattintasutan);
}

function kattintasutan() {
  const ELEM = document.querySelectorAll(".kattintasutan")[0];
  console.log(document.querySelectorAll("div.lista")[0]);
  ELEM.innerHTML = document.querySelectorAll("div.lista")[0].innerHTML;
}

function esemenyKezeles2() {
  const ELEM = document.querySelectorAll(".feladat")[0];
  let txt = "<button>OK</button>";
  ELEM.addEventListener("click", gombNyomas);
  ELEM.innerHTML = txt;
}
function gombNyomas() {
  const ELEM = document.querySelectorAll(".feladat")[0];
  ELEM.innerHTML += " <img id = 'kep'src='kep.gif' alt='kép'>";
}

function esemenyKezeles3() {
  const ELEM = document.querySelectorAll(".feladat")[0];
  ELEM.addEventListener("mouseover", hover);
  ELEM.innerHTML = document.querySelectorAll("div.feladat")[0].innerHTML;
}
function hover() {
  const ELEM = document.querySelectorAll(".feladat")[0];
  ELEM.innerHTML = document.getElementById("kep").width= "200";

}
function esemenyKezeles4() {
  const ELEM = document.querySelectorAll(".lista")[0];
  ELEM.addEventListener("esemen", fvenynev);
}
