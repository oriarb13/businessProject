console.log("baba the best");
"use strict";


const student_1 = {
  name: "John",
  age: 17,
  grades: {},
};


const product_1 = {
  name: "Phone",
  categories: ["electronics"],
  isAvailable: true,
};


const myProducts = [
  { name: "Laptop", price: 5, categories: ["electronics", "computers"] },
  { name: "Shirt", price: 1, categories: ["clothing"] },
  { name: "Phone", price: 3, categories: ["electronics", "gadgets"] },
];


const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];


const strings = [
  "baba",
  "my success",
  "no more lives",
  "and of session",
  "good discussion",
];


// 😅 Task 1: Update Student Age 😅
// TODO: Write a function to update the student's age (You can mutate the original object)
function updateAge(student, newAge) {
  student.age=newAge;
}


updateAge(student_1, 18);
console.log("Updated Student:", student_1);


// 😅 Task 2: Add Product Category 😅
// TODO: Write a function to add a new category to the product (You can mutate the original object)
function addCategory(product, category) {
    product.categories.push(category);
  
}


addCategory(product_1, "gadgets");
console.log("Updated Product:", product_1);


// 😅 Task 3: Check Product Availability 😅
// TODO: Write a function to check if the product is available (return true if available, false otherwise)
function isProductAvailable(product) {
    if(product.isAvailable) return true;
    else  return false;

}


const isAvailable = isProductAvailable(product_1);
console.log("Is Product Available:", isAvailable);


// 🙂 Task 4: Find Product by Name 🙂
// TODO: Write a function to find a product by name
function findProductByName(products, productName) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
            return i;
        }
    }
    return `${productName} is not exist`;
    }


const foundProduct = findProductByName(myProducts, "aShirt");
console.log("Found Product:", foundProduct);


// 🙂 Task 5: Count Products in Category 🙂
// TODO: Write a function to count the number of products in a category
function countProductsInCategory(products, category) {
    let count=0;
    for (let i = 0; i < products.length; i++) {
        if(products[i].categories.includes(category)) count++;        
    }
    return count;
}


const count = countProductsInCategory(myProducts, "computers");
console.log("Products in Electronics:", count);


// 🙂 Task 6: Get Student Ages 🙂


// TODO: Write a function to get an array of student ages
function getStudentAges(students) {
    const array=[];
    for (let i = 0; i < students.length; i++) {
        array.push(students[i].age);
    }
    return array;
}


const ages = getStudentAges(students);
console.log("Student Ages:", ages);


// 🤨 Task 7: Get Products by Category 🤨
// TODO: Write a function to get products by category
function getProductsByCategory(products, category) {
    const array=[];
    for (let i = 0; i < products.length; i++) {
        if (products[i].categories.includes(category))
            array.push(products[i]);        
    }
    return array;
}


const electronics = getProductsByCategory(myProducts, "clothing");
console.log("Electronics Products:", electronics);


// 🤨 Task 8: Get Average product prices 🤨
// TODO: Write a function to get the average price of all products
function getAveragePrice(products) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < products.length; i++) {
        sum+= products[i].price;
        count++;        
    }
    return (sum / count);
}


const averagePrice = getAveragePrice(myProducts);
console.log("Average Price:", averagePrice);


// 🤨 Task 9: Add Grade to Student 🤨
// TODO: Write a function to add a grade to a student (You can mutate the original object)
function addGrade(student, subject, grade) {
    student.grades[subject] = grade;
}


addGrade(student_1, "math", 85);
console.log("Updated Student:", student_1);


// 😥 Task 10: Count Occurrences of a Character 😥
// TODO: Write a function to count the occurrences of the character 's'
function countCharacterOccurrences(strings, char) {
    let count=0;
    for (let i = 0; i < strings.length; i++) {
        for (let j = 0; j < strings[i].length; j++) {
            if (strings[i][j] === char) {
                count++;
            }        
        }
    }
    return count;
}

console.log(strings);
const s_count = countCharacterOccurrences(strings, "s");
const c_count = countCharacterOccurrences(strings, "b");
console.log("Occurrences of 's':", s_count);
console.log("Occurrences of 'b':", c_count);


// 😥 Task 11: Update Product Price by Name 😥
// TODO: Write a function to update the price of a product by name (You can mutate the original object)
function updatePriceByName(products, productName, newPrice) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
            products[i].price = newPrice;
        }        
    }
}


// 😥 Task 12: Get Uppercase Strings 😥
// TODO: Write a function to get an array of uppercase strings (You should return a new array)
function getUppercaseStrings(strings) {
    const array = [];
    for (let i = 0; i < strings.length; i++) {
        array.push(strings[i].toUpperCase());
    }
    return array;
}


const uppercaseStrings = getUppercaseStrings(strings);
console.log("Uppercase Strings:", uppercaseStrings);


updatePriceByName(myProducts, "Phone", 590);
console.log("Updated Products:", myProducts);


// 🥵 Task 13: group strings by spaces occurences 🥵
// TODO: Write a function to group strings by the number of spaces in the string.
// The function should return an object where keys are the number of spaces and values are arrays of strings.


function groupStringsBySpaces(strings) {
    const object1 = {};
    for (let i = 0; i < strings.length; i++) {
        let count=0;
        for (let j = 0; j < strings[i].length; j++) { 
            if (strings[i][j] === " ") count++;
        }
        if (!object1[count]) object1[count] = [strings[i]];
        else object1[count].push(strings[i]);
    }
    return object1;
}


const groupedStrings_1 = groupStringsBySpaces(strings);
console.log("Grouped Strings By Spaces:", groupedStrings_1);


// 🥵 Task 14: group strings by length 🥵
//TODO: Write a function to group strings by length.
// The function should return an object where keys are the length of the strings and values are arrays of strings.


function groupStringsByLength(strings) {
    const object1 = {};
    for (let i = 0; i < strings.length; i++) {
        if (!object1[strings[i].length]) object1[strings[i].length] = [strings[i]];
        else object1[strings[i].length].push(strings[i]);
    }
    return object1;
}
  


const groupedStrings_2 = groupStringsByLength(strings);
 console.log("Grouped Strings By Length:", groupedStrings_2);


// 🥵 Task 15: Capitalize Strings 🥵
// TODO: Write a function to capitalize the first letter of each string in the array (You should return a new array)
// Bonus: Capitalize the first letter of each word in the string (split by space)
function capitalizeStrings(strings) {
    let array=[...strings];
    let array2=[];
    for (let i = 0; i < array.length; i++) {
        let x=array[i][0].toUpperCase(); 
        for (let j = 1; j < array[i].length; j++) {
            if(array[i][j-1] === " ")  x += array[i][j+1].toUpperCase();
            else x+=array[i][j];
        }
        array2.push(x);           
    }
    return array2;
}

const capitalizedStrings = capitalizeStrings(strings);
console.log("Capitalized Strings:", capitalizedStrings);







// function capitalizeStrings(strings) {
//     array=[];
//     for (let i = 0; i < strings.length; i++) {
//         let string=strings[i];
//         string[0].toUpperCase();
//         for (let j = 0; j < strings[i].length; j++) {
//             if(string[j] === " ")
//                 string[j+1].toUpperCase();
//         }           
//         array.push(string);
//     }
//     return array;
// }


