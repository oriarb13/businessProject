//JavaScript Loops Exercises
//1
for(i=10;i>0;i--) console.log(i);
//2
for (i=2;i<21;i+=2) console.log(i);
//3
let sum=0;
for (i=1;i<11;i++){
    sum+=i;
}
console.log(sum);
//4
for(i=5;i<51;i+=5)
{
    console.log(i);
}
//5
let str="*";
for(i=1;i<6;i++)
{
console.log( str);
str+="*";
}
//while' Loop Exercises
//1
let num99;
while(num99 < 11){    
    num99++;
    log(num99);
}



//2.
let numm=3;
while(numm <= 100){
    console.log(numm);
    numm*=2
}
let numberr=1;
do {console.log(numberr);;
    numberr++;
} while (numberr<6);



//3
let aa=20;
while(aa >= 0){
    console.log(aa);
    aa--;
}



//4
let pass;
let pass1;
let ispass=false;
while(!ispass){
    pass=prompt("enter a password");
    if(pass===pass1) ispass=true;
}




//5


//1
for (i = 1; i < 21; i++) console.log(i);


//2
let x = 1;
while (x < 16) {
    console.log(x)
    x += 2;
};


// //3
// let nummm;
// do {
//     nummm=Number(prompt("enter a number between 1-10"));
// } while (nummm>10 || nummm<1);

//4
let sum1 = 0;
for (i = 1; i < 101; i++) {
sum1 += i;
}
console.log(sum1);


//5
let q = 10;
while (q > 0) {
  console.log(q);
  q--;
}
console.log("blast off!!");

//6
let r = 1;
let sum3 = 0;
while (r < 6) {
  console.log(sum3);
  sum3 += r;
  r++;
}



  ///////////7

// function getRandomInt(min,max){
//     console.log( Math.floor((Math.random() * (max - min + 1))+min));
// }

// let numroll;
// do {
//     numroll=getRandomInt(1,6);
// }while (numroll!==3);
// console.log(numroll);


//8
for (i = 14; i < 51; i += 7) {
  console.log(i);
}

console.log("sss");

console.log(33);


//9
let num1 = 1001;
while(!(num1%3===0&&num1%7===0))
{
  num1++;
}
console.log(num1);



//10
let w;
let sum4 = 0;
while (w < 0) {
  console.log(sum3);
  sum4 *= w;
  w--;
}



////////////////////////////////////11
let guess;
let answer=5;
let hint="";
do {
    //guess=Number(prompt(hint + " ,guess a number 1-20"));
    if(guess > answer) hint="lower";
    else if(guess < answer) hint="higher";
} while (answer !== guess);

//12
num3=21;
isprime=true;
for(i=2;isprime&&i<num3;i++){
     if (num3%i===0) isprime=false; 
}
console.log(isprime);




///////////////////////////////////////////////////////////////////13
//while(i=)
//num4;
//num4.toString(2);




//14
let str3;
for (i=1 ; i<6 ; i++){
    str3= i.toString();
     console.log(str3.repeat(i));
}




//15
let isExit="no";
let num111=0;
do {
    //num111 += Number(prompt("enter a number to the calculator"));
    //isExit= prompt("are you done  no/yes ");
} while (isExit==="no");






//16
let num11;
let num12;
let di
divider= "there is no divider";
for(i=1 ; i<num12 || i<num11 ; i++){
    if (num%i===0&&num%i===0) divider=i;
}


//17

//18
let num22=2;
let n;
for(i = 1 ; i > n ; i++){
    num22*=2;
}
//19
let counter1=0;
let side="back";
do {
    side = Math.random() * 2;
    if(side===2) counter++;
    
} while (counter1!==3);




//20
let sum11=0;
let n1;
for (i = 1 ; i < n1 ; i++ ){
    sum11+=i*i;
}




//21
let value;
let sum8=0;
let num9=0;
while(sum8<value){
    num9++;
    sum8=sum8+num9
}







