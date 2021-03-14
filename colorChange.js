const memeButton=document.getElementById("memeButton")

const bgcolor = ["#ff3381", "#93f", "#f56", "#eeff00", "#003cff"]
const font = ["#111", "#fff", "#111", "#111", "#fff"]

function colorChange(){
    let limit = bgcolor.length;
    let index = Math.floor(Math.random() * limit);

    memeButton.style.background = bgcolor[index];
    memeButton.style.color = font[index];
}