let userBalance = 1000;

const userTransactions = [{
    type: 'deposit',
    amount: 1000
},{
    type: 'withdraw',
    amount: 3000
},{
    type: 'deposit',
    amount: 2000
},]

const storedPIN = '1234';
let counter=0;
function PINValidation(userInput,validationParagraph,mainWrap,userInputName,formElement){        
        if (counter<3) {    
            if (userInput === storedPIN) {                        
                validationParagraph.textContent = `hello ${userInputName}, choose an action pleas`;
                validationParagraph.classList.add('valid');
                removeHidden(mainWrap)
                hiddenEl(formElement)

            } else {
                counter++;                        
                validationParagraph.textContent = `PIN incorrect , you have ${counter} chances left`;
                validationParagraph.classList.add('invalid');
            }
        } else {
            validationParagraph.classList.add('times3');
            validationParagraph.textContent = `PIN incorrect , your card is suspended, call the bank for more details`;
        }
}

function hiddenEl(el){
    el.classList.add('hidden');
}
function removeHidden(el){
    el.classList.remove('hidden');
}

//balance
function renderBalance(userBalanceEl){
    userBalanceEl.textContent = `Your balance is: ${userBalance}$`;
}

//last tran
function getTran(){
    return userTransactions
}

// Adding transaction
function addTransaction(typeNameValue,amountValue) {
    const transaction = {
        type: typeNameValue,
        amount: amountValue,
    };
    userTransactions.push(transaction);
}
//deposit
function newDeposit(amount){
    userBalance+=amount;
    return userBalance
}
function invalidDeposit(amount, elDepositResponse){
    if (isNaN(amount) || amount <= 0) {
        elDepositResponse.textContent = 'Please enter a valid amount.';
        return false;
    }
    else return true
}


//withdraw
function newWithdraw(amount){
    userBalance-=amount;
    return userBalance
}
function invalidWithdraw(amount,elWithdrawResponse){
    if (isNaN(amount) || amount <= 0 || amount > userBalance) {
        elWithdrawResponse.textContent = 'Please enter a valid amount.';
        return false;
    }
    else return true
}


export const Service = {
    PINValidation,
    hiddenEl,
    removeHidden,
    renderBalance,
    getTran,
    addTransaction,
    newDeposit,
    invalidDeposit,
    invalidWithdraw,
    newWithdraw
};