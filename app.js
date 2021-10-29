
//displaying navabr background 
function navBackground() {

    let x = window.pageYOffset;
    
    let w = window.innerWidth;

    if ((x >= 700) || (w < 1000)) {
        document.getElementById("nav").style.backgroundColor = "#0D0221";
    } else {
        document.getElementById("nav").style.backgroundColor = "";
    };
}





//event listeners

window.addEventListener('DOMContentLoaded', function () {
    
    navBackground();
});

window.addEventListener("scroll", function () {
    
    navBackground();
})

window.addEventListener("resize", function () {
    navBackground();
})

document.getElementById("submitBtn").addEventListener("click", () => {
    document.getElementById("resultsHeading").style.display = "block";
})


