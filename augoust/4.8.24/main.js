function getSize(myproduct){
    let sizess={
        s:0,
        m:0,
        l:0,
        xl:0
    };
    for(i = 0 ; i < myproduct.length() ; i++ ){
        for (let j = 0; j < myproduct[i].info.sizes.length(); j++) {
            switch (myproduct[i].info.sizes[j]){
                case "s":
                    sizess.s++;
                    break;
                case "m":
                    sizess.m++;
                    break;
                case "l":
                    sizess.l++;
                    break;
                case "xl":
                    sizess.xl++;
                    break;
            }   
            
        }
    }
}

// function greaterN(array1,n){
//     let arr=[];
//     for (let i = 0; i < array1.length; i++) {
//         if(array1[i][grade] > n) arr.push(array1[i]);
//     }
//     return arr;
// }
// let names=["ori","yali","guy"];
// function createPerson(array){
//     let array2=[];
//     for (let i = 1; i <= array.length; i++) {
//         array2.push({name: array[i], id:i});    
//     }
//     return array2;
// }
// console.log(createPerson(names,key));
// const element = array[i];


let array3 = [
    { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
    { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
    { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
    { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
    { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
    { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
];

// console.log(groupBy(employees, "department"));


function groupBy(array2,key){
    let group={};
    for (let i = 0; i < array2.length; i++) {
        let team1=array2[i][key];
        if(!group[team1]){
            group[team1]=[];
        }
        group[team1].push(array2[i]);
    }
    return group;
}
//console.log(groupBy(array3,"department"));

"use strict";

let person = {
  name: "John",
  age: 17,
  address: {
    city: "New York",
    zip: "10001",
  },
};

// TODO: Write a function to update the person's city
function updateCity(person, newCity) {
  person.address.city=newCity;
}

updateCity(person, "Los Angeles");
console.log("Updated Person:", person);

/////////////////////////////////////////////////////

let students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

// TODO: Write a function to return an array of student names
function getStudentNames(students) {
    let arr=[];
    for (let i = 0; i < students.length; i++) {
        arr.push(students[i]["name"]);
    }
    return arr;
}

let names = getStudentNames(students);
console.log("Student Names:", names);

// TODO: Write a function to find a student by ID
function getStudentById(students, id) {
    for (let i = 0; i < students.length; i++) {
        if(id === students[i]["id"]){ 
            let crr= (students[i]);
            return crr;
        }         
    }
}

let student1 = getStudentById(students, 2);
console.log("Found Student:", student1);

// TODO: Write a function to find a student by ID
function getStudentById(students, id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  }
  return null;
}

// let student = getStudentById(students, 2);
// console.log("Found Student:", student);

// TODO: Write a function to add a new student to the array
function addStudent(students, newStudent) {
    students.push(newStudent);
}

addStudent(students, { id: 4, name: "lie", age: 19 });
console.log("Updated Students:", students);

/////////////////////////////////////////////////////

let product = {
  name: "Laptop",
  price: 1200,
  isAvailable: true,
  categories: ["electronics", "computers", "tech","lele","dada","nana"],
};

// TODO: Write a function to toggle the product's availability
function toggleAvailability(product) {
  // your code here
}

// toggleAvailability(product);
// console.log("Updated Product:", product);

// TODO: Write a function to update the product's price
function updatePrice(product, newPrice) {
  // your code here
}

// updatePrice(product, 1500);
// console.log("Updated Product:", product);

// TODO: Write a function to remove a category from the product
function removeCategory(product, category) {
  for (let i = 0; i < product.categories.length; i++) {
    if(product.categories[i] === category) product.categories.splice(i,1)    
  }
}

removeCategory(product, "tech");
console.log("Updated Product:", product)

/////////////////////////////////////////////////////

let products = [
  { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
  { name: "Mouse", price: 25000, sizes: ["S", "M"], isAvailable: false },
  { name: "Keyboard", price: 5200, sizes: ["L", "XL"], isAvailable: true },
];

// TODO: Write a function to find the most expensive product
function findMostExpensiveProduct(products) {
    let maxPrice= 0;
    let maxPROD= "";
  for (let i = 0; i < products.length; i++) {
    if(products[i].price > maxPrice) {
        maxPrice = products[i].price; 
        maxPROD = products[i].name;
    }
    else if(products[i].price === maxPrice) {
       maxPROD=`${maxPROD}, ${products[i].name}`;
    } 
  }
  return maxPROD;
}

let expensiveProduct = findMostExpensiveProduct(products);
console.log("Most Expensive Product:", expensiveProduct);

// TODO: Write a function to return an array of only available product sizes
function getAvailableSizes(products) {
  let productSizes=[];
  for (let i = 0; i < products.length; i++) {
    if (products[i].isAvailable) {
        productSizes.push(products[i])
    }
  }
  return productSizes;
}

let sizes = getAvailableSizes(products);
console.log("Available Sizes:", sizes);

/////////////////////////////////////////////////////

let student = {
  name: "Alice",
  age: 20,
};

// TODO: Write a function to add a new property to the student object
function addProperty(student, key, value) {
    student[key]=value;
}

addProperty(student, "grade", "A");
console.log("Updated Student:", student);

/////////////////////////////////////////////////////

let school = {
  name: "Greenwood High",
  address: {
    city: "Springfield",
    zip: "12345",
  },
  students: [
    { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
    { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
  ],
};

// TODO: Write a function to update a student's grade in a subject
function updateStudentGrade(school, studentId, subject, newGrade) {
    school.students[studentId].grades[subject]=newGrade;
}

updateStudentGrade(school, 1, "math", 90);
console.log("Updated School:", school);

/////////////////////////////////////////////////////

let orders = [
  { id: 1, product: "Laptop", status: "delivered" },
  { id: 2, product: "Mouse", status: "pending" },
  { id: 3, product: "Keyboard", status: "delivered" },
  { id: 4, product: "Monitor", status: "pending" },
  { id: 5, product: "Laptop", status: "shipped" },
];

// TODO: Write a function to return an array of only delivered orders
function getDeliveredOrders(orders) {
    let arrDelivered=[];
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].status === "delivered") {
            arrDelivered.push(orders[i]);
        }        
    }
    return arrDelivered;
}

let deliveredOrders = getDeliveredOrders(orders);
 console.log("Delivered Orders:", deliveredOrders);

// TODO: Write a function to count the occurrences of each product in the orders
function countProductOccurrences(orders) {
    let productCounter={};
    for (let i = 0; i < orders.length; i++) {
        if(!productCounter[orders[i].product])
            productCounter[orders[i].product]=1;
        else productCounter[orders[i].product]++;         
        }
    return productCounter;
}

let productCounts = countProductOccurrences(orders);
console.log("Product Counts:", productCounts);
/*
  Output:
  {
    Laptop: 2,
    Mouse: 1,
    Keyboard: 1,
    Monitor: 1
  }
  */
