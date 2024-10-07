import { Service } from "./service.js";


const formElement = document.querySelector('form');
const validationParagraph = document.querySelector('#validation')
const mainWrap= document.querySelector('#main-wrap');

// Select and hold all buttons

// const withdrawButton = document.querySelector('#withdraw');
// const depositButton = document.querySelector('#deposit');
// const balanceButton = document.querySelector('#balance');
// const lastTransactionButton = document.querySelector('#lastTransaction');

const navElement = document.querySelector('nav');
const btnNodeList = navElement.querySelectorAll('button');




//PIN
let userInputPIN;
let userInputName;
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    userInputPIN = document.querySelector('#PIN').value;
    userInputName = document.querySelector('#name').value;
    
    // reset the validation text
    validationParagraph.textContent = '';
    validationParagraph.classList.remove('valid', 'invalid');
    Service.PINValidation(userInputPIN,validationParagraph,mainWrap,userInputName,formElement)   

    document.querySelector('#PIN').value=``;
    document.querySelector('#name').value=``;

});


//btns
const divContainer = document.querySelector('.container');
const containers = divContainer.querySelectorAll('div');
// Add Event Listener to the btns
btnNodeList.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        containers.forEach((container) => {
            Service.hiddenEl(container)
        });
        const currentEl  = document.querySelector(`#${e.target.id}El`)
        currentEl.classList.toggle('hidden');
    });
});



//last transaction
function renderLastTransaction(tranList1 = null) {
    const lastTransactionEl = document.querySelector('ol');
    lastTransactionEl.innerHTML = "";
    
    const tranList = tranList1 || Service.getTran();
    
    for (let i = 0; i < tranList.length; i++) {
        let currentTran = tranList[i];
        
        // Creating 
        const elTransaction = document.createElement("li");
        
        if(currentTran.type==="deposit") elTransaction.classList.add("valid");
        if(currentTran.type==="withdraw") elTransaction.classList.add("invalid");
        
        const elAmount = document.createElement("span");
        elAmount.textContent = `Amount: ${currentTran.amount}$`;
        
        const elType = document.createElement("span");
        elType.textContent = `type: ${currentTran.type}`;

        // Appending elements
        lastTransactionEl.appendChild(elTransaction);
        elTransaction.appendChild(elAmount);
        elTransaction.appendChild(elType);
    }

    
    
    
    //deposit
    const elDepositForm = document.getElementById('deposit-form');
    const elDepositInput = document.getElementById("deposit-input");
    const elDepositResponse = document.getElementById("deposit-response");
    
    elDepositForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // reset the validation text
        elDepositResponse.innerHTML = "";

        const amount = Number(elDepositInput.value);
        if (Service.invalidDeposit(amount,elDepositResponse)){   
            Service.addTransaction("deposit",amount)
            elDepositResponse.textContent=`The deposit was completed successfully, your balance account is:${Service.newDeposit(amount)}$`
        }
        elDepositInput.value = "";
        renderLastTransaction();
    });




    //withdraw
    const elWithdrawForm = document.getElementById('withdraw-form');
    const elWithdrawInput = document.getElementById("withdraw-input");
    const elWithdrawResponse = document.getElementById("withdraw-response");
    
    elWithdrawForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // reset the validation text
        elWithdrawResponse.innerHTML = "";

        const amount2 = Number(elWithdrawInput.value);
        if(Service.invalidWithdraw(amount2,elWithdrawResponse)){   
            Service.addTransaction("withdraw",amount2 )
            elWithdrawResponse.textContent=`The withdraw was completed successfully, your balance account is:${Service.newWithdraw(amount2)}$`
        }
        elWithdrawInput.value = "";
        renderLastTransaction();
        
    });
    
    
    
    
    //balance
    const balanceButton = document.querySelector('#balance');
    const userBalanceEl = document.querySelector('#userBalance');
    balanceButton.addEventListener('click', (event) => {
        event.preventDefault();
        Service.renderBalance(userBalanceEl); 
    });

}
    renderLastTransaction()
    