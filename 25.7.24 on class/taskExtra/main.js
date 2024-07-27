let accountBalance;
let maximumWithdrawalLimit;
const pin1 ;
const pin2 ;

function pinVerification(pin1)
{
    if (pin1===pin2) return true;
    else return false;
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
function mainATMOperation ()
{
    console.log("hello, enter your PIN code pleas");
     while (!pinVerification(pin1))
     {
       console.log("this PIN code invalid, pleas enter your PIN code again!!!" );
     }
     ////////////////////////////////////////////////////////////////איך ךתת עוד אופציות
     console.log("choose your action. 1-check balance, 2-withdraw, 3-deposit");
    let action1;
     switch(action1) {
        case 1:
            accountBalance.checkBalance(); 
        break;
        case 2:
            console.log("enter your desirable withdraw ");
            handleWithdrawls(maximumWithdrawalLimit,accountBalance);
        break;
        case 3:
         deposittt(deposit,balance);
        break;
     }
}