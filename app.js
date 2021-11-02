
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

//order confirmation function

function orderSubmit(firstName, lastName, email, voucher5, voucher10, voucher15) {
    if ((voucher5 == "Quantity") && (voucher10 == "Quantity") && (voucher15 && "Quantity")) {
        alert("You have not selected any vouchers!")
    } else {
        document.getElementById('orderForm').reset();
        document.getElementById("orderConfirm").innerHTML = 
        "<h3>Thank you for your order " + firstName + " " + lastName + ". A confirmation has been sent to you at  " + email + "</h3>";
    }
}

//message submit confirmation

function messageSubmit(firstName, lastName, email, message) {

    if( firstName && lastName && email && message != "") {
    document.getElementById('messageForm').reset();
    alert("Thank you for your message " + firstName + " " + lastName + ". We'll be in touch soon.")}
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

document.getElementById("orderSubmit").addEventListener("click", function () {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let voucher5 =document.getElementById("voucher5").value;
    let voucher10 =document.getElementById("voucher10").value;
    let voucher15 =document.getElementById("voucher15").value;
    
    

    orderSubmit(firstName, lastName, email, voucher5, voucher10, voucher15);
});

document.getElementById("contactSubmit").addEventListener("click", function () {
let firstName = document.getElementById("fname2").value;
let lastName = document.getElementById("lname2").value;
let email = document.getElementById("email2").value;
let message = document.getElementById("message").value;

messageSubmit(firstName, lastName, email, message);
});


