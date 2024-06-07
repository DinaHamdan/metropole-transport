let selectTicket = document.getElementById("selected-ticket");
let useTicket = document.getElementById("selected-tickets");
let bottomNav = document.getElementById("navigation");
selectTicket.addEventListener('click', () => {
    useTicket.style.display = "flex";
    buyLink.style.display = "none";
    bottomNav.style.display = "none";
    eTickets.style.backgroundColor = " #929292";
    selectTicket.style.borderRadius = "10px";
})

let whileUsingParagraph = document.querySelector(".while-using-para")
let countDown = document.getElementById("countdown-container");
let validation = document.getElementById("validation");
let validationTitle = document.querySelector(".validation-title-container");
let ticketTitle = document.querySelector(".with-tickets-title");
let useLink = document.getElementById("use-link");

useLink.addEventListener('click', () => {
    validation.style.display = "flex";
    useTicket.style.display = "none";
    eTickets.style.backgroundColor = " #f4f5f7";
    countDown.style.display = "inline-block";
    validationTitle.style.display = "flex";
    ticketTitle.style.display = "none";
    // selectTicket.style.borderRadius = "0";
    whileUsingParagraph.style.display = "none"
    selectTicket.style.boxShadow = "0 0 20px rgba(115,115,115,0.75)";

})