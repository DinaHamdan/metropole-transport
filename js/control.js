let metroControl = document.getElementById("control-link");
let controlPage = document.getElementById("control");
let controlParentTwo = document.getElementById("control-parent-container-two");

metroControl.addEventListener('click', () => {
    controlPage.style.display = "block";
    controlParentTwo.style.display = "block";
    console.log('we are in the control');
    eTickets.style.display = "none";
    controlParentOne.style.display = "none";


})

let correspondanceControl = document.getElementById("correspondance");
let controlParentOne = document.getElementById("control-parent-container-one");

correspondanceControl.addEventListener('click', () => {
    controlPage.style.display = "block";
    controlParentOne.style.display = "block";
    console.log('we are in the correspondance');
    eTickets.style.display = "none";
    controlParentTwo.style.display = "none";

})