//100+ Array Exercises for JavaScript with Hints and W3Schools Links
//1
let fruits=[];

//2
let numbers=[1,2,3,4,5];

//3
let colors=["red", "green", "blue"];

//4
let mixed=[Number, String, Boolean];

//5
let seasons=["summer","winter","fall","spring"];

//6
console.log(numbers.length);

//7
let emptyCheck=[];
let isempty;
if(emptyCheck.length===0) isempty=true;
else isempty=false;

//8
let dynamic=[1,2,3,4,5]
console.log(dynamic.length);

//9
dynamic.push(1);
console.log(dynamic.length);

//10
dynamic.shift();
console.log(numbers.length);

//11
console.log(colors[0]);

//12
console.log(seasons[seasons.length-1]);

//13
console.log(numbers[Math.floor(numbers.length/2)]);

//14
console.log(fruits[fruits.length]);

//15
console.log(`the second color is: ${colors[1]}`);

//16
fruits[1]="apple";

//17
numbers[numbers.length-1]=10;

//18
numbers[2]=(numbers[2])*2;

//19
for(i = 0; i < colors.length; i++){
    colors[i]=colors[i].toUpperCase();
}
console.log(colors);

//20
let k=seasons[0];
seasons[0]=seasons[seasons.length-1];
seasons[seasons.length-1]=k;

//21
fruits.push("orange");

//22
numbers.pop();

//23
colors.push("grey","white","pink");

//24
let empty=[];
for (i = 1; i <= 5; i++){
    empty.push(i);
}

//25
for (i = empty.length - 1; i >= 0; i--){
    console.log(empty[i]);
    empty.pop();

}

//26
fruits.unshift("mango");

//27
numbers.shift();

//28
numbers.unshift(10,20,30);

//29
let d=[];
for(i = 5; i >= 1; i--){
    d.unshift(i);
}

//30
for (i = d.length - 1; i >= 0; i--){
    console.log(d[i]);
    d.pop();
}

//31
console.log( colors.indexOf("green"));

//33
console.log(colors);
let f=colors.lastIndexOf('red');
console.log(f);

//36
console.log( fruits.includes("apple"));

//41
console.log(numbers.slice(0,3));

//42 
console.log(colors.slice(-1,-2));

//43
console.log(seasons.slice(1,4));

//44
let seasons1=seasons.slice(0,seasons.length);
console.log(seasons1);

//46
console.log(fruits);
fruits.splice(Math.floor(fruits.length/2)-1,Math.floor(fruits.length/2));

console.log(fruits);


//47
console.log(seasons.splice(1,2));

//50
let array11=[1,2,3,4,5,6,7,8,9,0];
array11.splice(0,array11.length);
console.log(array11);

//51
let con=fruits.concat(colors);
console.log(con);

//52
let con3=con.concat(numbers);

//53
let con4=[11,22,33,44];
con4=numbers.concat(con4);

//56
console.log(numbers.join("--"));

//57
console.log(numbers.join("__"));

//58
function sep(arr){
    let str;
    console.log(arr.join("__"));
}

//60
let arr9=["ori","guy","nir","krtren","yahli"];
let str4=arr9.join(" ");
console.log(str4.split(","));


//61

console.log(seasons);
console.log(seasons.reverse());

//63

numbers.reverse();
console.log( numbers.map( Number ,Boolean));

//64
let str6="ori";
console.log(str6.split("").reverse().join(""));

//65
let array0=[1,2,3,4,];
for (let index = 1; index < Math.floor(array0.length/2); index++) {
    let t=array0[index];
    array0[index]=array0[-index];
    array0[-index]=t;
}
console.log(array0);




//66
console.log(fruits);
console.log(fruits.sort());

//67

let arr3=[10,20,3,2,19];
arr3.sort(function(a, b){return b - a});
console.log(arr3);

//68

arr3.sort(function(a, b){return a-b});
console.log(arr3);


//69
let arr4=["app","mouse","game"];
arr4.sort(function(a, b){return a.length-b.length});
console.log(arr4);

//71

colors.forEach(function print9(x) {
    console.log(x);
})


//72
console.log(numbers);
numbers.forEach(function double(item, index, arr) {
    arr[index] = item *2;
})
console.log(numbers);


//73


//74
