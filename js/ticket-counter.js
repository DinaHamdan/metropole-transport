//Declare plus minus button to count single tickets and their respective prices 
let minusBtn = document.getElementById('minus-btn');
let counter = document.getElementById('counter');
let plusBtn = document.getElementById('plus-btn');
let singlePrice = document.querySelector('.single-price');


let countNum = 0;
counter.innerHTML = countNum;


let priceNumSingle = 1.20;
singlePrice.innerHTML = priceNumSingle;


minusBtn.addEventListener("click", () => {

    priceNumSingle -= 1.20;
    singlePrice.innerHTML = priceNumSingle;
    if (priceNumSingle < 1.2) {
        priceNumSingle = 1.20;
        singlePrice.innerHTML = priceNumSingle;
    }
    countNum -= 1;
    counter.innerHTML = countNum;
    if (countNum < 0) {
        countNum = 0;
        counter.innerHTML = countNum;
    }


});

plusBtn.addEventListener("click", () => {

    countNum += 1;
    counter.innerHTML = countNum;

    if (countNum >= 2) {
        priceNumSingle += 1.20;
        singlePrice.innerHTML = priceNumSingle;
    }
    // countNum += 1;
    // counter.innerHTML = countNum;

    // priceNumSingle += 1.20;
    // singlePrice.innerHTML = priceNumSingle;

})


//Declare plus minus button to count multickets tickets and their respective prices 
let multiMinusBtn = document.querySelector('.multi-minus-btn');
let multiCounter = document.querySelector('.multi-counter');
let multiPlusBtn = document.querySelector('.multi-plus-btn');
let multiplePrice = document.querySelector('.multiple-price');

let multiCountNum = 0;
multiCounter.innerHTML = multiCountNum;

let priceNumMultiple = 9.00;
multiplePrice.innerHTML = priceNumMultiple;

multiMinusBtn.addEventListener("click", () => {

    priceNumMultiple -= 9.00;
    multiplePrice.innerHTML = priceNumMultiple;
    if (priceNumMultiple < 9.00) {
        priceNumMultiple = 9.00;
        multiplePrice.innerHTML = priceNumMultiple;
    }

    multiCountNum -= 1;
    multiCounter.innerHTML = multiCountNum;
    if (multiCountNum < 0) {
        multiCountNum = 0;
        multiCounter.innerHTML = multiCountNum;
    }


});

multiPlusBtn.addEventListener("click", () => {

    multiCountNum += 1;
    multiCounter.innerHTML = multiCountNum;

    if (multiCountNum >= 2) {
        priceNumMultiple += 9.00;
        multiplePrice.innerHTML = priceNumMultiple;

    }



});