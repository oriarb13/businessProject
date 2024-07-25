let accountBalance;
let maximumWithdrawalLimit;
const pin1 ;
const pin2 ;

function pinVerification(pin1)
{
    if (pin1===pin2) return true;
}
function checkBalance(accountBalance)
{
    console.log("your current account balance is :"+accountBalance);
}
function handleWithdrawls(maximumWithdrawalLimit,accountBalance)
{
    if(maximumWithdrawalLimit<=accountBalance)
    {
        accountBalance-=maximumWithdrawalLimit;
        return ("withdrawn amount is: "+maximumWithdrawalLimit);
    }
    else return ("you can not afford this withdraw amount,try equal or less than: "+accountBalance);

}
let deposit ;
function deposittt(deposit,balance)
{
    balance+=deposit;
    return("your new balance is: " +balance);
}
function ATMOperation ()
{
    if()

}