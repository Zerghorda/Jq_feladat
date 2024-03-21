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
  const ELEM = $("#f1");
  console.log(ELEM.text());
}
function elemekElerese2() {
  const ELEM = $("#ide");
  ELEM.html("Jó reggelt!");
}
function elemekElerese3() {
  const ELEM = $(".ide");
  ELEM.html("Jó reggelt!");
}
function elemekElerese4() {
  const ELEM = $(".lista");
  let lista = [];
  let txt = "<ul>";
  for (let index = 0; index < 5; index++) {
    txt += `<li>${(lista[index] = Math.floor(Math.random() * 20) + 10)}</li>`;
  }
  txt += "</ul>";
  ELEM.html(txt);
}
function elemFormazas1() {
  const ELEM = $(".lista");
  ELEM.addClass("formazott");
}
function esemenyKezeles1() {
  const ELEM = $(".lista");
  ELEM.on("click", kattintasutan);
}

function kattintasutan() {
  const ELEM = $(".kattintasutan");
  console.log($("div.lista"));
  ELEM.html($("div.lista").html());
}

function esemenyKezeles2() {
  const ELEM = $(".feladat");
  let txt = "<button>OK</button>";
  ELEM.on("click", gombNyomas);
  ELEM.html(txt);
}
function gombNyomas() {
  const ELEM = $(".feladat");
  ELEM.html(" <img id = 'kep'src='kep.gif' alt='kép'>");
}

function esemenyKezeles3() {
  const ELEM = $(".feladat");
  ELEM.hover(hover);
  ELEM.html($("div.feladat").html());
}
function hover() {
  const ELEM =$(".feladat");
  ELEM.html($("#kep").css("width","200"));

}
function esemenyKezeles4() {
  const ELEM = $(".tarolo");
  ELEM.on("click", function (event) {
    $(".megjelenito").append($(".tarolo").html(event.target))
  });
}
