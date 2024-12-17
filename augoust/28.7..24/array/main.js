
//JavaScript Array Practice Exercises
//1
let favoriteFood = ["banana" , "hamburger" , "chocolate" , "pizza" , "ice cream" ]
console.log(favoriteFood);
//2
console.log(favoriteFood[2]);
//3
favoriteFood[1]="apple";
//4
favoriteFood.push("t bone")
console.log(favoriteFood);
//5
favoriteFood.shift();
//6
for(i=0 ; i<favoriteFood.length; i++){
    console.log(favoriteFood[i]);
}
//7
console.log(favoriteFood.indexOf("t bone"));
//8
let numbers=[1,3,7,8];
let sum1=0;
for(i = 0 ; i < numbers.length ; i++){
    sum1+=numbers[i];
}
console.log(sum1);



/////////////////////////////////////JavaScript Array Exercises
//1
let fruits=["banana","peach","apple"];

//2
fruits.push("melon");

//3
let lastFruit=fruits.pop();
console.log(lastFruit);

//4
let numbers1=[1,2,3,4,5];
console.log(numbers1[2]);

//5
numbers[1]="kiwi";
//6
let colors=[];
colors.push("red", "green", "blue");
//7
colors.shift();
//8
colors.unshift("yellow");
//9
let nums=[10,31,7,8];
let sum2=0;
for(i = 0 ; i < nums.length ; i++){
    sum2+=nums[i];
}
console.log(sum2);
//10
console.log(colors.indexOf("green"));
//11
let random=[4,32,34,22,11];
let num1=random[0];
for(i = 1 ; i<random.length; i++){
if(num1<random[i]) num1=random[i];
}
console.log(num1);
//12
let newfruit=fruits.slice(1, 3);
console.log(newfruit);
//13
let numbers2=[2,5,7,9,8,1,4];
let onlyEven =[];
for (i = 0; i < numbers2.length ; i++){
    if(numbers2[i] %2 !== 0) onlyEven.unshift(numbers2[i]);
}
console.log(onlyEven);

//14
let separator;
separator =colors.join(",");
console.log(separator);


//15
let array1=[0,0,70,40,50,60];
let array2=[0,5,8,6,4];
array1.concat(array2);
console.log(array1);

//16
console.log(fruits);
console.log(fruits.reverse());

////////17

let arrayNames=["ori","nana","baba","dor"];
let l;
let arrayGreeting=arrayNames.map(function(l){
    return "hello "+l;
});
console.log(arrayGreeting);

/////////


//18
function greater(number){
    if (number > 0) return true;
}
console.log( array2.every(greater));

//19
function greater10(x){
    if (x > 10) return true;

}
console.log( array1.find(greater10));


//20
function banananananananananana(x){
    if (x==="banana") return true;
}
console.log(fruits.some(banananananananananana));

//21
function func(x,y){
    return x+y;

}
console.log( array1.reduce(func));


//22
let rib=[];
for ( i = 1; i < 11 ; i++){
    rib.push(i);
    rib[i]*=rib[i];
}
console.log(rib);

//23
let words =["fill","run","exercise","download"];
function moreThan5(word){
    if (word.length < 5) return false;
}
console.log(words.filter(moreThan5));