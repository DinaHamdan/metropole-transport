let amount = document.getElementById("amount");
let cardNb = document.getElementById("card-nb");
let expireDate = document.getElementById("month-label");
let month = document.getElementById("month-lang");
let year = document.getElementById("year-lang");
let cancelMsg = document.getElementById("cancel-msg");
let legalMention = document.querySelector('.mention-legal');
let cvv = document.getElementById("cvv-label");



let languageBtn = document.getElementById("language-button");
languageBtn.addEventListener('click', () => {
    if (languageBtn.innerHTML === 'FR') {
        languageBtn.innerHTML = 'ES';
        amount.innerHTML = 'Importe : 1,20 EUR <span class="amount"></span>';
        cardNb.innerHTML = 'Número de tarjeta';
        expireDate.innerHTML = 'Válida hasta';
        month.innerHTML = 'mes';
        year.innerHTML = 'año';
        submitButton.innerHTML = 'VALIDAR';
        cvv.innerHTML = 'CVV';
        cancelMsg.innerHTML = 'Anular y volver a la tienda';
        legalMention.innerHTML = "Aviso legal";
    }
    else {
        languageBtn.innerHTML = 'EN';
        amount.innerHTML = 'Amount : 1,20 EUR <span class="amount"></span>';
        cardNb.innerHTML = 'Card number';
        expireDate.innerHTML = 'Expiry date';
        month.innerHTML = 'month';
        year.innerHTML = 'year';
        submitButton.innerHTML = 'Submit';
        cvv.innerHTML = 'Security code';
        cancelMsg.innerHTML = 'Cancel and return to shop';
        legalMention.innerHTML = "View Legal notice";



    }
    if (languageBtn === 'EN') {
        languageBtn.innerHTML = 'FR'
        amount.innerHTML = 'Montant : 1,20 EUR <span class="amount"></span>';
        cardNb.innerHTML = 'Numéro de carte';
        expireDate.innerHTML = 'Expire fin';
        month.innerHTML = 'mois';
        year.innerHTML = 'année';
        submitButton.innerHTML = 'VALIDER';
        cvv.innerHTML = 'Cyptogramme visuel';
        cancelMsg.innerHTML = 'Annuler et retourne à la boutique';
        legalMention.innerHTML = "Mention legal";
    }
});