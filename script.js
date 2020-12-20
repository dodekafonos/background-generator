let css = document.querySelector("h3");
let color1 = document.querySelector(".cor1");
let color2 = document.querySelector(".cor2");
let fundo = document.querySelector("#fundo");
let hex1 = document.querySelector("#cor1-txt");
let hex2 = document.querySelector("#cor2-txt");
let cheat = document.querySelector("#cheat");

hex1.innerHTML += color1.value
hex2.innerHTML += color2.value

cheat.innerHTML = "body { background: linear-gradient(to right, " + color1.value + ", " + color2.value + ") }"

function inputValue() {
    console.log(color1.value)
    fundo.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")"
    hex1.innerHTML = "Primeira cor: " + color1.value
    hex2.innerHTML = "Segunda cor: " + color2.value
}

color1.addEventListener("input", inputValue)

color2.addEventListener("input", inputValue)