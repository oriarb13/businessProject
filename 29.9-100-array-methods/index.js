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
const find1=arr1.find((num)=>{
    return num>3 
})
console.log(find1);


//27
const arr13=[1, 3, 5, 2, 4, 6]
const findIndex1=arr13.findIndex((num)=>{
    return num%2===0 
})
console.log(findIndex1);

//28
const arr14=['תפוח', 'בננה', 'דובדבן', 'תמר']
const find3=arr14.find((str)=>{
    return str.length > 5 
})
console.log(find3);


//29
const findIndex2=arr14.findIndex((str)=>{
    return  str === 'דובדבן'
})
console.log(findIndex2);

//30
const find5=arr1.findIndex((num)=>{
    return  num<0
})
console.log(find5);

//31
const arr16=[3, 1, 4, 1, 5, 9, 2, 6, 5]
const sort1=arr16.sort((a,b)=>{
    return  a-b
})
console.log(sort1);


//32   ///////////////////////////////////////////
const sort2=arr14.sort((a,b)=>{
    return  a-b
})
console.log(sort2);



//33

const sort3=arr16.sort((a,b)=>{
    return  b-a
})
console.log(sort3);


//34
const sort4=arr14.sort((a,b)=>{
    return  b.length-a.length
})
console.log(sort4);

//35
const sort5=arr14.sort((a,b)=>{
    return  b.length-a.length
})
console.log(sort5);

//36
const arr17=[1, [2, 3], [4, [5, 6]]]
const flat5=arr14.sort((a,b)=>{
    return  b.length-a.length
})
console.log(flat5);

//37
const flat6=arr17.flat(2)
console.log(flat6);

//38
const arr18=[1, 2, , 4, 5]
const flat7=arr18.flat();
console.log(flat7);

//39
const arr19=['א', ['ב', 'ג'], 'ד']
const flat8=arr19.flat();
console.log(flat8);

//40
const arr20=[1, [2, [3, [4, [5]]]]]
const flat9=arr20.flat(Infinity);
console.log(flat9);


//41
const arr21=['א', 'ב', 'ג', 'ד']
const obj1={};
const forEach1=arr21.forEach((num,index)=>{
    obj1[num]=index
})
console.log(obj1);


//42

const arr22=[10, 20, 30, 40]
const map6=arr22.map((num,index)=>{
    return {num:num,index:index}
})
console.log(map6);

//43

const arr23=['תפוח', 'בננה', 'אבטיח', 'תמר']
const filter6=arr23.filter((str)=>{
    return str.includes("א");
})
console.log(filter6);

//44
const arr24=['א', 'ב', 'א', 'ג', 'ב', 'א']
const reduce6=arr24.reduce((obj,str)=>{
    if (!obj[str])  obj[str]=1
    else obj[str]++
    return obj
},{})
console.log(reduce6);

//45
const arr25= ['שלום', 'עולם', 'גאווהסקריפט']
const some6=arr25.some((str)=>{
    return str.includes("ל") 
})
console.log(some6);

//46
const arr26=[2, 4, 6, 8]
const every1=arr26.every((num)=>{
    return num %2 === 0 
})
console.log(every1);

//47
const arr27=[{id: 1, status: 'לא פעיל'}, {id: 2, status: 'פעיל'}]
const find6=arr27.find((obj)=>{
    return obj.status= 'פעיל'
})
console.log(find6);

//48
const arr28=[3, 7, -2, 9, -5]
const findindex3=arr28.findIndex((num)=>{
    return num<0
})
console.log(findindex3);

//49
const arr29=['JavaScript', 'Python', 'Ruby', 'Java']
const sort6=arr29.sort((a ,b)=>{
    return b.length-a.length
})
console.log(sort6);


//50
const arr30=[1, [2, [3]], [4, [5]]]
const flat10=arr30.flat(1)
console.log(flat10);

//51
const arr31=['ש', 'ל', 'ו', 'ם']
let str1="";
arr31.forEach((char)=>{
    str1+=char;
})
console.log(str1);

//52
const map7=arr1.map((num)=>{
    return num*10
})
console.log(map7);


//53
const arr32=[1, 2, 3, 4, 5, 6, 7, 8, 9]
const filter67=arr32.filter((num)=>{
    return num%3===0
})
console.log(filter67);

//54
const arr33=['קצר', 'בינוני', 'הכי ארוך', 'ארוך יותר']
const reduce7=arr33.reduce((longest,str)=>{
    if (str.length>longest.length) return longest=str
}, "")
console.log(reduce7);

//55
const arr34=[1, 3, 5, 7, 9]
const some7=arr34.some((num)=>{
    return num%2===0
},)
console.log(some7);

//56
const arr35=['תפוח', 'תפ', 'תפוז'] 
const every2=arr35.every((str)=>{
    return str.startsWith("תפ")
},)
console.log(every2);

//57
const arr36=[{id: 1, completed: false}, {id: 2, completed: true}]
const find7=arr36.find((obj)=>{
    return obj.completed=true
},)
console.log(find7);

//58
const arr37=['תפוח', 'בננה', 'דובדבן']
const findindex5=arr37.findIndex((str)=>{
    return str==='בננה';
})
console.log(findindex5);


//59
const arr38=[{name: 'יוחנן', age: 25}, {name: 'יעל', age: 30}, {name: 'בועז', age: 20}]
const sort7=arr38.sort((a ,b)=>{
    return a.name.localeCompare(b.name)
})
console.log(sort7);

//60
const arr39= [1, [2, 3], [4, [5, 6]]]
const flat11=arr39.flat(2)
console.log(flat11)

//61
const arr40= 'שלום'
arr40.split("").forEach((char)=>{
    console.log(char);
})

//62
const arr41=['תפוח', 'בננה', 'דובדבן']
map8=arr41.map((str)=>{
    return str[0]
})
console.log(map8);

//63
const arr42=['א', 'אב', 'אבג', 'אבגד']
const filter7=arr42.filter((str)=>{
    return str.length>3
})
console.log(filter7);

//64
const arr43=['תפוח', 'בננה', 'דובדבן']
const reduce8=arr43.reduce((total,str)=>{
    return total+=str.length
},0)
console.log(reduce8);

//65
const arr44=['שלום', 'עולם', 'גאווהסקריפט']
const some8=arr44.some((str)=>{
    return str.length>10
})
console.log(some8);

//66
const arr45=[10, 20, 30, 40, 50]
const every3=arr45.every((num)=>{
    return num>5
})
console.log(every3);

//67
const arr46=['ספר', 'דלת', 'חלון']
const find8=arr46.find((str)=>{
    return str.includes("ון")
})
console.log(find8);

//68
const arr47=['אאא', 'בב', 'ג']
const sort8=arr47.sort((a,b)=>{
    return a.length-b.length
})
console.log(sort8);

//69
const arr48=[1, [2, [3, [4]]]]
const flat12=arr48.flat(3)
console.log(flat12);

//71
const arr49=[1, 4, 9, 16]
const arrsqrt=[]
arr49.forEach((num)=>{
    arrsqrt.push(Math.sqrt(num))
})
console.log(arrsqrt);


//72
const arr50=['א', 'ב', 'ג']
const double1=[]
arr50.forEach((char)=>{
    double1.push(char.repeat(2))
})
console.log(double1);

//73
const arr51=[5, 10, 15, 20, 25]
const filter10=arr51.filter((num)=>{
    return num>10 && num<20
})
console.log(filter10);

//74
const arr52=[{א: 1}, {ב: 2}, {ג: 3}]
const reduce9=arr52.reduce((newObj,obj)=>{
    return {...newObj,...obj}
},{})
console.log(reduce9);

//75
const arr53=[{x: 1}, {y: 2}, {z: 3}]
const some9= arr53.some((obj)=>{
    return obj.hasOwnProperty("y")
})
console.log(some9);

//76
const arr54=['א1', 'ב2', 'ג3'] 
const every4 = arr54.every((str)=>{
    return /[א-ת]/.test(str)&&/[1-9]/.test(str)
})
console.log(some9);

//77
const arr55= [{מחיר: 60}, {מחיר: 40}, {מחיר: 70}]
const find9 = arr55.every((obj)=>{
    return obj.מחיר<50
})
console.log(find9);

//78
const arr56=[1, '', true, 0, null, 'שלום']
const findIndex6 = arr56.findIndex((x)=>{
    return x=null
})
console.log(findIndex6);

//79
const arr57=[3.14, 2.71, 1.41, 1.73]
const sort9 = arr57.sort((a,b)=>{
    return b-a
})
console.log(sort9);

//80
const arr58= ['א', ['ב', ['ג']]]
const flat14 = arr58.flat(Infinity)
console.log(flat14);

//81
const arr59= ['א', ['ב', ['ג']]]
const flat14 = arr59.flat(Infinity)
console.log(flat14);


