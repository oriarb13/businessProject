const numbers = document.getElementsByClassName("number");
const ratingDisplay = document.querySelector(".rating");

const one=document.querySelector(".Rating-state")
const two=document.querySelector(".thanks")

let lastSelectedNumber = null;
let numberValue;

Array.prototype.slice.call(numbers).forEach(number => {
    number.addEventListener('click', (event) => {
        event.preventDefault();
        if (lastSelectedNumber) {
            lastSelectedNumber.classList.remove("numberClick");
        }
        number.classList.add("numberClick");
        lastSelectedNumber = number;
        numberValue=number.textContent;
        ratingDisplay.textContent = `You selected ${numberValue} out of 5`;

    });
});


const btn=document.getElementById("btn")
btn.addEventListener('click', (event) => {
    event.preventDefault();
    two.classList.remove("hidden");
    one.classList.add("hidden");

})