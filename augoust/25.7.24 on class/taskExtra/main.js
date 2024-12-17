let accountBalance =prompt("enter your acount balance");
let maximumWithdrawalLimit=prompt("enter your maximum withdraw");
const pin2 =prompt("enter your PIN") ;
function pinVerification(pin2)
{ 
    let pin1=prompt("enter your PIN code");
    while (pin1!==pin2) 
    {
        pin1=prompt("your PIN is uncorrect");
    }
    return true;
}
function checkBalance(accountBalance)
{
    console.log("your current account balance is :"+accountBalance);
}
function handleWithdrawls(maximumWithdrawalLimit,accountBalance)
{
    let withdrawalamount;

    if(maximumWithdrawalLimit<=accountBalance)
    {
        if(withdrawalamount<=maximumWithdrawalLimit)
        {
        accountBalance-=withdrawalamount;
        return ("withdrawn amount is: "+maximumWithdrawalLimit);
        }
        else return ("the withdrawal is more than your maximum withdraw limit: "+maximumWithdrawalLimit); 
    }
    else return ("the withdrawal is more than your balance: "+accountBalance);

}
function deposittt(balance)
{
    let deposit=prompt("enter deposit");
    balance+=deposit;
    return("your new balance is: " +balance);
}
function mainATMOperation ()
{
    pin1.pinVerification()
     
     {
       console.log("this PIN code invalid, pleas enter your PIN code again!!!" );
     }
    let action1= prompt("choose your action. 1-check balance, 2-withdraw, 3-deposit");
    let isFinish= 2;
    while(isFinish===2)
    { 
      switch(action1) 
      {
        case 1:
            accountBalance.checkBalance(); 
        break;
        case 2:
            handleWithdrawls(maximumWithdrawalLimit,accountBalance);
        break;
        case 3:
         deposittt(deposit,balance);
        break;
      }
    isFinish=prompt("are you finish? 1-yes     2-no")
    }
}   
function integration(pin2,accountBalance,maximumWithdrawalLimit,)
{
      mainATMOperation(pin2,accountBalance,maximumWithdrawalLimit);
}