let cir = document.querySelector(".circle");
let togCon = document.querySelector(".toggle_con")
let sun = true;
let heading = document.querySelector("#h1");

// Get the SVG elements
let sunIcon = document.querySelector("#sun-icon");
let moonIcon = document.querySelector("#moon-icon");

togCon.addEventListener("click", (e) => {
    cir.classList.toggle('right');
    if (sun === true) {
        document.body.style.backgroundColor = "black";
        heading.style.color = "white";
        togCon.style.backgroundColor="#222222";
        sun = false;

    } else {
        // Change to day mode
        sun = true;
        document.body.style.backgroundColor = "white";
        heading.style.color = "black";
    }
});
