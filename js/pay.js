let acceptedPage = document.getElementById("accepted");
let submitButton = document.getElementById("submit");
submitButton.addEventListener('click', () => {
    payPage.style.display = "none";
    acceptedPage.style.display = "block";
    console.log("submit payment");

});

