//1

const array= [1,2,3,4]

const arr1= [...array]

//2
const array2= [5,6,7,8]

const arr2= [...array,...array2]

//3

const arr3= [0,...array2]

//4

const arr4= [...array2,0]

//5
const array3= [9,10,11]

const arr5= [...array,...array2,...array3]

//6
const arr6= [...array,111]

//7
const arr7= [...array.slice(1)]

//8

const arr8 = array.slice(-3)

//9

const arr9 = [...array].reverse()

//10
const arr10 = [array[0], 0, ...array.slice(2)]

//11

const string="ori" 

const str = [...string]

//12

const arr11= [...array,...array2]

//13
const arr12= [...array].slice(0,-1)

//14
const arr13= [...array.slice(0, 2), 111, ...array.slice(2)]
//15
const array4 = [1, 2, 2, 3, 4, 4, 5];

const arr14= [...new Set(array4)]
//16
const arr15 = [...array.slice(1),array[0]]
//17
const arr16= ["hello",...array]
//18
const merge=(...arrays)=>{
    return [].concat(...arrays)
}
console.log(merge(arr1,arr2,arr3));

//19
function shuffleArray(array) {
    const arr11 = [...array];
    return arr11.sort(() => Math.random() - 0.5);  
}  
shuffleArray(array);
console.log(shuffleArray(array));

//20
const object ={
    num:1,
    str:"ori"
}

const obj1= {...object, num:2}
//21
const object1 ={
    bool:true,
    array:[1,2,3]
}

const obj2= {...object,...object1}
//22

const obj3= {...object, num:2}
//23

const obj4= {...object, num2:2}

//24
const object3 ={
    bool2:false,
    array2:[10,20]
}

const obj5 = {...object,...object1,...object3}


//25
const obj6={...object} 

//26
const { age, ...obj7 } = object;  /////////////////////////////////////////////////

//27

const originalObject = {
    name2: 'John',
    number2: 30
  };
  
  const { name2, number2, ...rest } = originalObject;
  const swappedObject = { ...rest, name2: number2 , number2 : name2 };
  
//   console.log(swappedObject);  

//28

const object4 = {
    name11: 'Alice',
    age: 25,
    country: 'USA'
  };
  
  const { name11, ...rest2 } = object4;
  
  console.log(name11);  
  console.log(rest2);


  //30

const object5 = {
    name3: 'Alice',
    age3: 25,
    country3: 'USA',
    numss:{
        first:1,
        second:2,
        third:3
    }
};

const updatedObject = {
    ...object5, 
    numss: {
        ...object5.numss, 
        second: 20        
    }
};

console.log(updatedObject);

