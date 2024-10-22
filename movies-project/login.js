import { utils } from "./utils.js";

const signUpBtn = document.getElementById("sign-up");
const logInBtn = document.getElementById("log-in");

const logInEl = document.getElementById("PIN");
const signUpEl = document.getElementById("sign");

const formElement = document.getElementById("PIN-form");
const formElement2 = document.getElementById("sign-PIN-form");

let userInputPIN;
let userInputName;
const validationParagraph = document.getElementById("validation");
const validationParagraph2 = document.getElementById("validation2");

const users_STORAGE_KEY = 'users';
const users = utils.getFromStorage(users_STORAGE_KEY) || [];

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showElement(signUpEl);
    hideElement(logInEl);
});

logInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showElement(logInEl);
    hideElement(signUpEl);
});

// Create user function
function createUser(pin, name) {
    let user = {
        pin: pin,
        name: name
    };
    users.push(user);
    console.log(users);
    utils.saveToStorage(users_STORAGE_KEY, users);
}

// Sign up
formElement2.addEventListener('submit', (event) => {
    event.preventDefault();
    userInputPIN = document.querySelector('#sign-PIN').value;
    userInputName = document.querySelector('#name-sign').value;
    createUser(userInputPIN, userInputName);
    validationParagraph2.textContent = 'User created successfully, please log in'; 
    validationParagraph2.classList.add('valid');

    document.querySelector('#sign-PIN').value = ''; 
    document.querySelector('#name-sign').value = ''; 
});

// Login function
function PINValidation(userInput, validationParagraph, userInputName) {
    const isUserValid = users.some(user => userInput === user.pin && userInputName === user.name);

    if (!isUserValid) {
        validationParagraph.textContent = ' your password or your name is incorrect, please try again'; 
        validationParagraph.classList.add('invalid');
    } else {
        window.location.href = 'index.html';
    }
}

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    userInputPIN = document.querySelector('#PIN1').value;
    userInputName = document.querySelector('#name').value;
    validationParagraph.textContent = '';
    PINValidation(userInputPIN, validationParagraph, userInputName);
    document.querySelector('#PIN1').value = '';
    document.querySelector('#name').value = ''; 
});

// Hidden functions
function hideElement(el) {
    el.classList.add('hidden');
}

function showElement(el) {
    el.classList.remove('hidden');
}
