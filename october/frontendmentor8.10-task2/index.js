const pluses = document.querySelectorAll(".plus");
let currentMinus = null;

Array.prototype.slice.call(pluses).forEach(plus => {
    plus.addEventListener('click', (event) => {
        event.preventDefault();

        if (currentMinus && currentMinus !== plus) {
            currentMinus.src = '/assets/images/icon-plus.svg';
            currentMinus.nextElementSibling.classList.add("hidden");
        }

        plus.src = '/assets/images/icon-minus.svg';
        plus.nextElementSibling.classList.remove("hidden");
        currentMinus = plus;
    });
});