
let buyLink = document.getElementById("buy-link");
let eTickets = document.getElementById("e-tickets");
let buyPage = document.getElementById("buy-tickets");

buyLink.addEventListener('click', () => {
    eTickets.style.display = "none";
    console.log('clicked on buy link')
    buyPage.style.display = "block";

});

let payLink = document.getElementById("select-buy");
let selectTicketContainer = document.getElementById("child-one");
let termsCondtionsContainer = document.getElementById("terms-conditions");

payLink.addEventListener('click', () => {
    selectTicketContainer.style.display = "none";
    termsCondtionsContainer.style.display = "block";

});