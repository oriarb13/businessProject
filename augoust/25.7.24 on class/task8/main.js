//JavaScript Function Exercises
//1
function greet(){
    console.log("Hello, World!");
}
//2
function sqare(num1){
    let num2;
    num1=num2*num2;
    console.log(num2);
}
//3
function isEven (num){
    if(num%2===0)console.log(true);
    else console.log(false);

}
//4
function getFullName(fName,Lname){
 console.log(fName+" "+Lname);
}
//5
function sumTwo(num1,num2){
return num1+num2;
}
//6
function multiply(num1,num2){
return num1*num2;
}
//7
function greetPerson(name){
    return ("hello,"+name+"!");

}
//8
function getAbsoluteValue(num)
{
    if(num>0) return num;
    else return num*=(-1);
}
//9
function calculateAverage(num1,num2){
    return ((num1+num2)/2);
}
//10
function convertToUppercase(str)
{return toUppercase(str);

}
//11
function isPositive(num){
    if(num>0)return true;
    else return false;
}
//12
function getFirstChar(str){
    return str[0];
}
//13
function areaOfRectangle(width,height)
{return (width*height);}
//14
function remainderDivision(num1,num2){
    if(num1%num2===0) return "remainder!!!!";
}
//15
function logType(something)
{
   return typeof(something);
}
//16
function invertBoolean(bool){
    if(bool)return false;
    else if(!bool)return true;
    else return"type only boolean value!!!";
}
//17
function concatenateStrings(str1,str2){
    return (str1+str2);
}
//18
function findSmaller(num1,num2){
    if(num1>num2) return num2;
    else if(num1<num2) return num1;
    else return "the numbers are equals";
}
//19
function greetWithDefault(name){
    if(name!==undefined) return ("hello, "+name+"!");
    else return ("hello, guest!");
}
//20
function isLongString(str){
    if(str.length>10)return true;
    else return false;
}

