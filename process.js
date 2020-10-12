function getData(){

    //Fetch google sheets.
const url = "https://script.google.com/macros/s/AKfycbwe-o0Bf6h2u6sqL68X092ptaYBJZxWpunkGuDnjF8iGAFuW6bJ/exec";

fetch(url)
    .then(d=>d.json())
    .then(d=>{
        document.getElementById("result").textContent=d[0].status;
    });
}

document.getElementById("btn").addEventListener("click",getData);