//Declare plus and minus button to count single tickets and their respective prices 
let minusBtn = document.getElementById('minus-btn');
let counter = document.getElementById('counter');
let plusBtn = document.getElementById('plus-btn');
let singlePrice = document.querySelector('.single-price');

//declare the amount of tickets to 0 and add it to the html element
let countNum = 0;
counter.innerHTML = countNum;

//Declare the price of single ticket and add it to the html element
let priceNumSingle = 1.20;
singlePrice.innerHTML = priceNumSingle;

//add an event listener to substract
minusBtn.addEventListener("click", () => {
    //Counter for the price
    priceNumSingle -= 1.20;
    singlePrice.innerHTML = priceNumSingle;
    //Add a condition not to let the price go to negative
    if (priceNumSingle < 1.2) {
        priceNumSingle = 1.20;
        singlePrice.innerHTML = priceNumSingle;
    }
    // localStorage.setItem('singlePrix', JSON.stringify(singlePrice.innerHTML));
    // localStorage.setItem('singleTicketSum', JSON.stringify(counter.innerHTML));

    //Counter for the ticket number
    countNum -= 1;
    counter.innerHTML = countNum;

    //Add a condition not to let the ticket number go to negative
    if (countNum < 0) {
        countNum = 0;
        counter.innerHTML = countNum;
    }


});
//add an event listener to add
plusBtn.addEventListener("click", () => {
    //Counter for the ticket number
    countNum += 1;
    counter.innerHTML = countNum;

    //Counter for the price with a condition to start adding if tickets are equal or more than two
    if (countNum >= 2) {
        priceNumSingle += 1.20;

        //Format number to display only two numbers after comma
        let roundPriceNumSingle = priceNumSingle.toFixed(2);
        singlePrice.innerHTML = roundPriceNumSingle;
    }
    // localStorage.setItem('singlePrix', JSON.stringify(singlePrice.innerHTML));
    // localStorage.setItem('singleTicketSum', JSON.stringify(counter.innerHTML));



})


//Declare plus a,d minus button to count multickets tickets and their respective prices 
let multiMinusBtn = document.querySelector('.multi-minus-btn');
let multiCounter = document.querySelector('.multi-counter');
let multiPlusBtn = document.querySelector('.multi-plus-btn');
let multiplePrice = document.querySelector('.multiple-price');

//declare the amount of tickets to 0 and add it to the html element
let multiCountNum = 0;
multiCounter.innerHTML = multiCountNum;

//Declare the price of single ticket and add it to the html element
let priceNumMultiple = 9.00;
multiplePrice.innerHTML = priceNumMultiple;

//add an event listener to substract
multiMinusBtn.addEventListener("click", () => {
    //Counter for the price
    priceNumMultiple -= 9.00;
    multiplePrice.innerHTML = priceNumMultiple;
    //Add a condition not to let the price go to negative
    if (priceNumMultiple < 9.00) {
        priceNumMultiple = 9.00;
        multiplePrice.innerHTML = priceNumMultiple;
    }
    // localStorage.setItem('multPrix', JSON.stringify(multiplePrice.innerHTML));
    // localStorage.setItem('multiTicketSum', JSON.stringify(multiCounter.innerHTML));

    //Counter for the ticket number
    multiCountNum -= 1;
    multiCounter.innerHTML = multiCountNum;
    //Add a condition not to let the ticket number go to negative
    if (multiCountNum < 0) {
        multiCountNum = 0;
        multiCounter.innerHTML = multiCountNum;
    }


});

multiPlusBtn.addEventListener("click", () => {
    //Counter for the ticket number
    multiCountNum += 1;
    multiCounter.innerHTML = multiCountNum;
    //Counter for the price with a condition to start adding if tickets are equal or more than two
    if (multiCountNum >= 2) {
        priceNumMultiple += 9.00;
        multiplePrice.innerHTML = priceNumMultiple;
    }
    // localStorage.setItem('multPrix', JSON.stringify(multiplePrice.innerHTML));
    // localStorage.setItem('multiTicketSum', JSON.stringify(multiCounter.innerHTML));


});
//let multiPrix = JSON.parse(localStorage.getItem('multPrix'));
// let singlePrix = JSON.parse(localStorage.getItem('multPrix'));

let totalAmount = document.querySelector('.amount');
let totalTickets = document.querySelector('.total');
//parse Numbers of the price
let multiInteger = parseFloat(multiplePrice.innerHTML);
let singleInteger = parseFloat(singlePrice.innerHTML);
//Add them together
amountSum = multiInteger + singleInteger;
//Add them to inner html
totalAmount.innerHTML = amountSum;


//parse Numbers of the ticket
let multiSumCounter = parseFloat(multiCounter.innerHTML);
let sumCounter = parseFloat(counter.innerHTML);
//Add them together
ticketSum = multiSumCounter + sumCounter;
//Add them to inner html
totalTickets.innerHTML = ticketSum;


let buyingSummary = document.querySelector('#buying-summary');
