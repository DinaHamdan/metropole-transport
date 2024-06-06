let acceptedPage = document.getElementById("accepted");
let submitButton = document.getElementById("submit");
let shopIcon = document.querySelector(".with-tickets-shop-cart")
submitButton.addEventListener('click', () => {
    payPage.style.display = "none";
    acceptedPage.style.display = "block";
    console.log("submit payment");
    shopIcon.style.display = "inline-block";
});

