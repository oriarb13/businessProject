//some,every
const passwords = [
    "BluePanda@42",
    "Galaxy!Dance88",
    "Sushi4Life#21",
    "SunnyDay$1990",
    "Mango!Smoothie9",
    "Whimsical^Clouds",
    "DragonFly*2023",
    "Electric!Giraffe77",
    "PizzaLover#24",
    "StarryNight$12"
];

const pass=passwords.some((pass1)=>{
    return pass1.length>8 &&  /[a-zA-Z]/.test(pass1) && /[0-9]/.test(pass1)
})
console.log(pass);

//find and findindex
const elDone = document.getElementById("find1")
const elHighest = document.getElementById("find2")

const products = [
    { name: 'Smartphone', price: 2000, quantity: 0 },
    { name: 'Headphones', price: 150, quantity: 1 }, // This product is out of stock
    { name: 'Monitor', price: 800, quantity: 7 },
    { name: 'Keyboard', price: 100, quantity: 3 },
    { name: 'Laptop', price: 4000, quantity: 10 },
    { name: 'Smartwatch', price: 1800, quantity: 0 } // Another product out of stock
]

done= products.find((product)=>{
return (product.quantity===0);
})
const elName=document.getElementById("name")
elName.textContent=done.name

const elPrice=document.getElementById("price")
elPrice.textContent=done.price

const elQuantity=document.getElementById("quantity")
elQuantity.textContent=done.quantity


///2
elHighest.textContent = products.findIndex(function(product) {
    return product.price === Math.max(...products.map(p => p.price));
});




//sort
const students = [
    { name: 'David', averageGrade: 85 },
    { name: 'Michael', averageGrade: 85 },
    { name: 'John', averageGrade: 75 },
    { name: 'Sara', averageGrade: 90 },
    { name: 'Anna', averageGrade: 90 },
    { name: 'Ben', averageGrade: 95 }
];

const students1 =students.sort((student1,student2)=>{
    if(student1.averageGrade!=student2.averageGrade) 
        return student2.averageGrade-student1.averageGrade
    else return (student1.name > student2.name) ? 1 : -1;  
})
console.log(students1);


// flat
const array1=[1, [2, [3, [4, [5]]]]]
const flatArray = array1.flat(Infinity);
let sum = flatArray.reduce((total,number)=>{
    return total + number;
}, 0)
console.log(sum);


//////////////////////////////////////100array////////////////////////////////////

//1
const arr1= [1, 2, 3, 4, 5,6]
arr1.forEach((num)=>{
    console.log(num)
})

//2
arr1.forEach((num)=>{
    console.log(num*2)
})

//3
arr1.forEach((num)=>{
    console.log(num**2)
})

//4
let sum1=0;
arr1.forEach((num)=>{
    sum1+=num;
})
console.log(sum1);

//5
const arr2=['Hello', ' ', 'World', '!']

let str=""
arr2.forEach((string)=>{
    str+=string
})
console.log(str);

//6

const map1=arr1.map((num)=>{
    return num*2;
})
console.log(map1);

//7
const arr3=['תפוח', 'בננה', 'דובדבן']
const map2=arr3.map((str)=>{
    return str.length;
})
console.log(map2);

//8
const arr4=[1, 4, 9, 16, 25]
const map3=arr4.map((num)=>{
    return Math.sqrt(num);
})
console.log(map3);

//9
const arr5=['hello', 'word']
const map4=arr5.map((str)=>{
    return str.toUpperCase();
})
console.log(map4);

//10
const arr6=[true, false, true]
const map5=arr6.map((bool1)=>{
    return !bool1;
})
console.log(map5);

//11
const filter1=arr1.filter((num)=>{
    return num%2===0;
})
console.log(filter1);

//12
const arr7=['תפוח', 'בננה', 'דובדבן', 'תמר', 'אלדרברי']
const filter2=arr7.filter((str)=>{
    return str.length>5;
})
console.log(filter2);

//13
const arr8=[5, 10, 15, 20, 25]
const filter3=arr8.filter((num)=>{
    return num>10;
})
console.log(filter3);

//14
const filter4=arr7.filter((str)=>{
    return str[0]===`ת`;
})
console.log(filter4);

//15
const filter5=arr1.filter((num)=>{
    return num%2===0;
})
console.log(filter5);

//16
const reduce1=arr1.reduce((total,number)=>{
    return total + number;
}, 0)
console.log(reduce1);

//17
const reduce2=arr1.reduce((total,number)=>{
    return total * number;
}, 1)
console.log(reduce2);

//18
const reduce3=arr8.reduce((max,number)=>{
    if (number>max) max = number
    return max
}, 0)
console.log(reduce3);

//19
const arr9=['שלום', ' ', 'עולם', '!']
const reduce4=arr9.reduce((last,str)=>{
    
    return last+str
}, "")
console.log(reduce4);

//20
const arr10=[1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
const reduce5=arr10.reduce((obj,num)=>{
    if(!obj[num]) obj[num]=1
    else obj[num]++
    return obj
}, {})
console.log(reduce5);

//21
const some1=arr1.some((num)=>{
    return num>3
})
console.log(some1);

//22
const some2=arr1.every((num)=>{
    return num%2===0
})
console.log(some2);

//23
const some3=arr7.some((str)=>{
    return str.length>6
})
console.log(some3);

//24
const arr11=['חתול', 'כלב', 'פיל']
const some4=arr11.every((str)=>{
    return str[0]==="י" || str[0]==="ו"
})
console.log(some4);

//25
const arr12=[false, false, true, false]
const some5=arr12.some((bool1)=>{
    return bool1 
})
console.log(some5);

//26
