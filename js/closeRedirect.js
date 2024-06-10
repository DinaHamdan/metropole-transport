let closeLink = document.getElementById("close-link");
let showTicket = document.getElementById("with-tickets");
let noTicketTitle = document.getElementById("no-tickets");
let shopIcon = document.querySelector(".with-tickets-shop-cart");
let savedTicketImg = document.getElementById("selected-ticket");
closeLink.addEventListener('click', () => {
    console.log('we are in the select phase');
    acceptedPage.style.display = "none";
    eTickets.style.display = "block";
    showTicket.style.display = "block";
    noTicketTitle.style.display = "none";
    buyLink.style.margin = "200px 20px 50px 40px";
    shopIcon.style.display = "inline-block";
    localStorage.setItem('ticketJSON', JSON.stringify(savedTicketImg));
});

//Uncheck checkbox on
let checkBox = document.getElementById("terms");

window.addEventListener('load', () => {
    checkBox.checked = false;
    if (localStorage.getItem('ticketJSON')) {
        acceptedPage.style.display = "none";
        eTickets.style.display = "block";
        showTicket.style.display = "block";
        noTicketTitle.style.display = "none";
        buyLink.style.margin = "200px 20px 50px 40px";
        shopIcon.style.display = "inline-block";
    }
    // if ((localStorage.getItem('ticketJSON')) && (localStorage.getItem('usedTicketJSON'))) {
    //     beingUsed.style.display = "block";
    // }
})

