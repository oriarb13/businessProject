let firstName = "ori";
let lastName = "arbeli";
let age = 22;
let isStudent = true;
//2 boolean expressions
let isAdult = age > 18;
console.log(isAdult)
let isJohn;
console.log(firstName==="john");
//task2
function greet (firstName , lastName)
 {
    let fullName = firstName+" "+lastName;
    
    console.log("hello, "+ fullName.toUpperCase() + "! Welcome to the IITC Bootcamp."
);
    }
    
    greet(firstName,lastName);

//task3
function checkAge(age)
{
    if(age<13) return"you are a child";
    else if(age>13 && age<=18 ) return"you are a teenager";
    else if(18<age && age<=64) return"you are an adult";
    else return"you are senior";
}
let youAre=checkAge (age);
console.log(youAre);

//
let dayOfWeek;
function getDayMessage(dayOfWeek)
{
switch (dayOfWeek)
 {
    case "Monday": 
      return "Today is Monday";
      break;
    case "Tuesday":
      return "Today is Tuesday";
      break
    case "Wednesday":
      return "Today is Wednesday";
      break;
    case "Thursday":
      return "Today is Thursday";
      break;
    case "Friday":
      return "Today is Friday";
      break;
    case "Saturday":
      return "Today is Saturday";
      break;
    case "Sunday":
      return "Today is Sunday";
      break;
    default:
      return "Invalid day";
 }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
  
//
function checkEligibility(age, isStudent)
{if(age<18 && isStudent)
    return "you are a minoe student";
    else if(age<18 && !isStudent)
        return"you are a minor non-student";
    else if(age>18 && age<24 && isStudent)
        return"you are a young adult student";
    else if (age<24 && age>18 && !isStudent)
        return "you are a young adult non-student";
    else if(age>=25 && isStudent)
        return "You are an adult student.";
    else if(age>=25 && !isStudent)
        return "You are an adult non-student.";
}
let checkResault=checkEligibility(age,isStudent);
console.log(checkResault);
// string comparison
function formatName(name)
{
    name=name.trim();
    name=name.toLowerCase();
    return name;
}
let name1="    Ori";

name1=formatName(name1);
if(name1==="admin") console.log( "hello,admin");
else console.log("hello, "+name1);
//nested if statement
let isMember;
function checkDiscount(age,isMember)
{if(age<18){
    if (isMember) return "You get a 20% discount.";
    else return "You get a 10% discount.";
}
else if(age>=65) {
    if (isMember) return "You get a 30% discount.";
    else return "You get a 20% discount.";
}
if(18<age&&age<64){
    if(isMember) return "You get a 10% discount.";
    else return "No discount available.";   
}
////login
}
let username;
let password;
function validateLogin(username,password)
{
    let storedUsername="ori123";
    let storedPassword="ori13690";
    if(username===storedUsername && password===storedPassword)
        {
            return "Login successful.";
        }
    else return "Invalid username or password.";

}
console.log(validateLogin("ori123","ori13690"));

///substring
function extractInitials (firstName,lastName)
{
    firstName=firstName.toUpperCase();
    lastName=lastName.toUpperCase();
    return (firstName.charAt(0)+"."+lastName.charAt(0)+".");
}
console.log(extractInitials("ori","arbeli"));
// string replacement
let email;
function maskEmail(email)
{
    let indexG=email.indexOf("@");
    let removeC=email.substring(0, indexG);
    return email.replace(removeC,"*****");
}
console.log(maskEmail("oriarb@gmail.com"));
//nested if else
let score;
function gradeCalculator(score)
{
    if(score>=90) return "A";
    else if(score>=80) return "B";
    else if(score>=70) return "C";
    else if(score>=60) return "D";
    else return "F";
}
console.log(gradeCalculator(67));
//complex boolean conditions
let isCitizen;
function canVote(age,isCitizen)
{
    if(age>=18 && isCitizen) return "You are eligible to vote.";
    else return "You are not eligible to vote.";

}
//string and number conversion
function convertToUpperCaseAndAddAge(name,age)
{
    age=age.toString();
    return (name.toUpperCase()+age);

}
console.log(convertToUpperCaseAndAddAge("ori",22));
//Capitalize First Letter
let word;
function Capitalizee(word)
{
    return word=word.charAt(0).toUpperCase()+word.substring(1);

}
console.log(Capitalizee("ori"));
//check substring
let substring;
let mainString;
function containsSubstring (mainString,subString)
{
    if(mainString.includes(subString)) return true;
    else return false;
}
console.log(containsSubstring("oriko","ori"));
/////////////////////////////////

let typeCar;
let year;
let priceCar;
function carCalculate(typeCar,year,priceCar)
{
    let year2=year;
    let newPrice=priceCar;
    while (year2!==2024)
    {
        newPrice = (newPrice-newPrice*(1/10));
        year2++;
    }
    let document=[typeCar,year, year2 ,priceCar,newPrice];
    console.log(document);
}
carCalculate("renault",2022,200);

/////////////////מערך
let mispar;

function factorial (mispar) 
{
    let mispar2=mispar-1;
    let sum11;
    let sum12;
    sum11=mispar*mispar2;

    while(mispar2-1!==0)
    {
        mispar2--;
        sum12=mispar2*sum12;
    }
    console.log(sum12);
}
////// עצרת
let num99;
let sum99=1;
function cal(num99)
{
  while (num99!==1)
  {
    sum99=num99*sum99;
    num99=num99-1;
  }
  console.log(sum99);
}
cal(5);
let bb="bacr";
console.log();

