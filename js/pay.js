let acceptedPage = document.getElementById("accepted");
let submitButton = document.getElementById("submit");

// let form = document.querySelector('form');



submitButton.addEventListener('click', () => {
    payPage.style.display = "none";
    acceptedPage.style.display = "block";
    console.log("submit payment");
});

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
});

let firstQuestionMark = document.getElementById("first-question-mark");
let hiddenCardInfo = document.getElementById("hidden-card-info");
firstQuestionMark.addEventListener('click', () => {
    hiddenCardInfo.style.display = "block";
})
let closeCardInfo = document.getElementById("close-card");
closeCardInfo.addEventListener('click', () => {
    hiddenCardInfo.style.display = "none";
})


let secondQuestionMark = document.getElementById("second-question-mark");
let hiddenCvvInfo = document.getElementById("hidden-cvv-info");
secondQuestionMark.addEventListener('click', () => {
    hiddenCvvInfo.style.display = "block";
})

let closeCvvInfo = document.getElementById("close-cvv");
closeCvvInfo.addEventListener('click', () => {
    hiddenCvvInfo.style.display = "none";
})
