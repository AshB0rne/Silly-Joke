const pressbtn = document.getElementById("press-btn");
const h1Element = document.getElementById("h1-element");
const h1Element2 = document.getElementById("h1-element2");

pressbtn.onclick = function () {
    h1Element.innerText = "Bahu ka Buli!";
    h1Element2.innerText = "Bwahahahaha";

    pressbtn.style.opacity = 0;
}