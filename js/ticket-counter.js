//Declare plus and minus button to count single tickets and their respective prices 
let minusBtn = document.getElementById('minus-btn');
let counter = document.getElementById('counter');
let plusBtn = document.getElementById('plus-btn');
let singlePrice = document.querySelector('.single-price');
let totalAmount1 = document.querySelector('#latotal');
let totalAmount2 = document.querySelector('#latotal-2');
let totalAmount3 = document.querySelector('#latotal-3');
let totalTicks = document.querySelector('#totalTickets');
let totalTicks2 = document.querySelector('#totalTickets-2');
let totalTickets = document.querySelector('.total');
//declare the amount of tickets to 0 and add it to the html element
let countNum = 0;
counter.innerHTML = countNum;
let total = 0;


// //parse Numbers of the ticket
// let multiSumCounter = parseFloat(multiCounter.innerHTML);
// let sumCounter = parseFloat(counter.innerHTML);
// //Add them together
// ticketSum = multiSumCounter + sumCounter;
// //Add them to inner html
// totalTickets.innerHTML = ticketSum;

//Function to update the total of the
let unitPriceSolo = 1.20;
let unitPriceGroup = 9.00;


function updateTotal() {
    //parse Numbers of the price
    // let singleInteger = parseFloat(singlePrice.textContent);
    // let multiInteger = parseFloat(multiplePrice.textContent);
    if (incrementationSolo < 0) {
        incrementationSolo = 0;
    }
    if (incrementationGroup < 0) {
        incrementationGroup = 0;
    }
    //Add them together
    amountSum = Math.round(incrementationSolo + incrementationGroup);
    //Add them to inner html
    totalAmount1.innerHTML = amountSum;
    totalAmount2.innerHTML = amountSum;
    totalAmount3.innerHTML = amountSum;

    amountNb = countNum + multiCountNum;
    console.log(amountNb);
    //Add number
    totalTicks.innerHTML = amountNb;
    totalTicks2.innerHTML = amountNb;
}

//
//Declare the price of single ticket and add it to the html element
let priceNumSingle = 1.20;
singlePrice.innerHTML = priceNumSingle;
let incrementationSolo = 0;

//add an event listener to substract
minusBtn.addEventListener("click", () => {
    //Counter for the price
    priceNumSingle -= 1.20;
    singlePrice.textContent = Math.round(priceNumSingle);
    incrementationSolo -= 1.2;

    //Add a condition not to let the price go to negative
    if (priceNumSingle < 1.2) {
        priceNumSingle = 1.20;
        singlePrice.textContent = Math.round(priceNumSingle);

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

    updateTotal();

});



//add an event listener to add
plusBtn.addEventListener("click", () => {
    //Counter for the ticket number
    countNum += 1;
    counter.textContent = countNum;

    //
    incrementationSolo += 1.2;
    console.log('this is incrementatio Solo +' + incrementationSolo);

    //Counter for the price with a condition to start adding if tickets are equal or more than two
    if (countNum >= 2) {
        priceNumSingle += 1.20;

        //Format number to display only two numbers after comma
        let roundPriceNumSingle = priceNumSingle.toFixed(2);
        singlePrice.textContent = roundPriceNumSingle;

    }
    // localStorage.setItem('singlePrix', JSON.stringify(singlePrice.innerHTML));
    // localStorage.setItem('singleTicketSum', JSON.stringify(counter.innerHTML));

    updateTotal();


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


//
let incrementationGroup = 0;

//add an event listener to substract
multiMinusBtn.addEventListener("click", () => {
    //Counter for the price
    priceNumMultiple -= 9.00;
    multiplePrice.innerHTML = priceNumMultiple;
    //
    incrementationGroup -= 9.00;
    console.log('this is incrementatio group -' + incrementationGroup);

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

    updateTotal();
});

multiPlusBtn.addEventListener("click", () => {
    //Counter for the ticket number
    multiCountNum += 1;
    multiCounter.innerHTML = multiCountNum;

    incrementationGroup += 9.00;
    console.log('this is incrementatio group +' + incrementationGroup);


    //Counter for the price with a condition to start adding if tickets are equal or more than two
    if (multiCountNum >= 2) {
        priceNumMultiple += 9.00;
        multiplePrice.innerHTML = priceNumMultiple;
    }
    // localStorage.setItem('multPrix', JSON.stringify(multiplePrice.innerHTML));
    // localStorage.setItem('multiTicketSum', JSON.stringify(multiCounter.innerHTML));

    updateTotal();
});
//let multiPrix = JSON.parse(localStorage.getItem('multPrix'));
// let singlePrix = JSON.parse(localStorage.getItem('multPrix'));




let buyingSummary = document.querySelector('#buying-summary');
