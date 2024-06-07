
let buyLink = document.getElementById("buy-link");
let eTickets = document.getElementById("e-tickets");
let buyPage = document.getElementById("buy-tickets");

buyLink.addEventListener('click', () => {
    eTickets.style.display = "none";
    console.log('clicked on buy link')
    buyPage.style.display = "block";

});


let addSingleButton = document.getElementById("plus-btn");
let addMultiButton = document.getElementById("multi-plus-btn");
let containerPayLink = document.getElementById("child-two");
addSingleButton.addEventListener('click', () => {
    containerPayLink.style.display = "block";
    console.log("seletected single tickets");
});
addMultiButton.addEventListener('click', () => {
    containerPayLink.style.display = "block";
    console.log("selected multi tickets");
});







let payLink = document.getElementById("select-buy");
let selectTicketContainer = document.getElementById("child-one");
let termsCondtionsContainer = document.getElementById("terms-conditions");
let totalPayTickets = document.getElementById("total-tickets");

let totalPayContainer = document.getElementById("total-container");

payLink.addEventListener('click', () => {
    console.log("heading towards terms and conditions");
    selectTicketContainer.style.display = "none";
    termsCondtionsContainer.style.display = "block";
    payLink.innerHTML = "Payer";
    totalPayTickets.style.display = "none";
    payLink.style.backgroundColor = "#fe3b0094";
    totalPayContainer.style.boxShadow = "none";
});


let agreeTerms = document.getElementById("terms");
let payPage = document.getElementById("payment");






agreeTerms.addEventListener('click', () => {
    payLink.style.backgroundColor = "#fe3b00";
    console.log("agreed to terms and conditions");

    payLink.addEventListener('click', () => {
        buyPage.style.display = "none";
        payPage.style.display = "block";


    })

})


let goBackChoose = document.getElementById("go-back-choose");
goBackChoose.addEventListener('click', () => {
    eTickets.style.display = "block";
    
    buyPage.style.display = "none";

})