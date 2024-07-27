//JavaScript Conditional Statements Exercises
//1
let age;
if(age>=18){ 
    let canVote=true;
}
//2
let temperature;
if(temperature<0){
    let weather="freezing";
}
else{
    let weather="not freezing";
} 
//3
let score;
if (score>=60) {
    let result="pass";
}
else {
    let result="fail";
}
//4
let grade;
if (grade>=90) {
    let letterGrade="A";
}
else if(grade>=80){
    let letterGrade="B";
}
else {
    let letterGrade="C";
}
//5
let number;
if(number%1===0){
   let isEven=true;
}
   else false
//6
let year;
let isLeapYear1;
if(year%4===0){
    let isLeapYear=true;
}
else isLeapYear1=false;
//7
let hour;
if(hour<12){
letperiod="AM";
}
else{
    letperiod="PM";
}
//8
let dayNumber;
let dayName;
if(dayNumber===1)dayName="sunday";
else if(dayNumber===2)dayName="monday";
else if(dayNumber===3)dayName="tuesday";
else if(dayNumber===4)dayName="wednesday";
else if(dayNumber===5)dayName="thursday";
else if(dayNumber===6)dayName="friday";
else if(dayNumber===7)dayName="saturday";
//9
let name1;
if(name1==="")
{let hasName=false;}
//10
let amount,shipping;
if(amount>1000)shipping=0;
else shipping=5;
//11
let password,isLogIn;
if(password==="secret123") isLogIn=true;
else isLogIn=false;
//12
let month;
let season;
if(month<4&&month>0)season="winter";
else if(month<7&&month>3)season="spring";
else if(month<10&&month>6)season="summer";
else if(month<13&&month>9)season="fall";
//13
let income;
let creditScore;
if(income>50000&&creditScore>700){
    let loanApproved=true;
}
//14
let age3;
let discount;
if(age3<18||age3>65)
{discount=0.2;}
else discount=0;
//15
let num1
let inRange;
if(num1>0&&num1<11)inRange=true;
else inRange=false;
//16
let dayNumber1;
let dayName1;
switch(dayNumber1){
case 1: dayName1="sunday";
break;
case 2:dayName1="monday";
break;
case 3:dayName1="tuesday";
break;
case 4:dayName1="wednesday";
break;
case 5:dayName1="thursday";
break;
case 6:dayName1="friday";
break;
case 7:dayName1="saturday";
default:dayName1="invalid day";
}
//17
let grade1;
let description1;
switch(grade1 )
{
case "A": description1="Excellent";
break;
case "B":description1="very good";
break;
case "C":description1="good";
break;
case "D":description1="not bad";
break;
case "F":description1="bad";
break;
default:description1="invalid grade";
}
//18
let num2;
let sign1;
if(num2<0)sign1="the number is negative";
if(num2>0)sign1="the number is positive";
else  sign1="the number is zero";
//19
let year1;
let isCenturyLeapYear;
if(year1%400===0)isCenturyLeapYear=true;
else isCenturyLeapYear=false;
//20
let month1;
let dayInMonth;
switch(month1)
{
    case (month1%2===1):dayInMonth=31;
    break;
    case (month1===2):dayInMonth=28;
    break;
    case (month1%2=== 0&& month1!==2):dayInMonth=30;
    break;
}
//21
let num15;
let exp;
if (num15<0&&num15%2===0) exp="even and negative";
else if (num15<0&&num15%2===1) exp="odd and negative";
else if (num15>0&&num15%2===0) exp="even and positive";
else if (num15>0&&num15%2===1) exp="odd and positive";
else if( num15===0) exp="zero";
//22
let score1;
let attendance;
let grade2;
if (attendance>79)
{
    if (score>90) grade2="A";
    else  if (score>80) grade2="B";    
    else  if (score>70) grade2="C";    
    else  if (score>60) grade2="D";    
    else  grade2="F";    
}
else{
    if (score>90) grade2="B";
    else  if (score>80) grade2="C";    
    else  if (score>70) grade2="D";    
    else  if (score>60) grade2="F";    
    else  grade2="-F*F!!!!";    
}
//23
let year2;
let isLYear;
if(year2%4===0&&year2%100!==0) isLYear=true;
else if(year2%400===0) isLYear=true;
else isLYear=false;
//24
let age4;
let isEmployed2;
let isEmployed;

if(age4<18) isEmployed2="student";
else if(age4>17&& !isEmployed) isEmployed2="Unemployed Adult";
else if(age4>17&& isEmployed) isEmployed2="employed Adult";
//25
//26
let x0;
let y0;
let quadrant;
if(x0>0&&y0>0) quadrant=1;
else if(x0<0&&y0>0) quadrant=2;
else if(x0<0&&y0<0) quadrant=3;
else if(x0>0&&y0<0) quadrant=4;
else quadrant="on the coordinates";
//27
let temperature1;
let pressure1;
let state1;
if(pressure1===1&&temperature1<0) state1="ice";
else if(pressure1===1&&temperature1>0&&temperature1<100) state1="liqid";
else if(pressure1===1&&temperature>100)state1="gas";
//28
let month2=2;
let isLeapYear=true;
let dayInMonth1;
switch(month2){
    case 1,3,5,7,8,10,12: dayInMonth1=31;
    break;
    case 4,6,9,11: dayInMonth1=30;
    break;
    case 2: 
      if(isLeapYear) dayInMonth1=29;
      else isLeapYear=28 ;
    break;
    default:isLeapYear="invalid month";
    }
    console.log(dayInMonth1);
//29
let a1;
let a2;
let a3;
let bool1;
if(a1+a2<a3&&a1+a3>a2&&a2+a3>a1) bool1=true;
else bool1=false;


//30
let a;
let b;
let c;
let x1;
let x2;
let roots1;

x1=(b+Math.sqrt(b*b-4*a*c))/2*a*c
x2=(b-Math.sqrt(b*b-4*a*c))/2*a*c
if(x1===x2 && (b*b-4*a*c)>=0) roots1="there is only one root: "+x1;
else if (x1!==x2 && (b*b-4*a*c)>=0) roots1="there is two roots: "+x1+","+x2;
else roots1="there is no roots";

//31
let num3;
let pairity = num3%2===0 ? true : false;
//32
let age2;
let canVote1 = age2 >= 18 ? true : false;
