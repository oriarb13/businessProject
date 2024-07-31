let oriarbeli = {
    name: "ori arbeli",
    age: 22,
    city: "rishon letzion"
};

console.log(oriarbeli);

let myComputer = {
    company: "lenovo",
    model: "YOGA7i",
    city: "rishon letzion"
};

console.log(oriarbeli);

console.log(oriarbeli.city);
console.log(oriarbeli["city"]);
oriarbeli.age="gil";
oriarbeli.hairColor="black"

let person = {
    name: "ori",
    age: 22,
    isStudent: true 
};

person.name;
person.age;
console.log("Name:"+person.name+", age: "+person.age);
person.isStudent=false;
console.log(person);

//2

let car = {   //creating an object
    make: "renault",
    model: "clio",
    year: 2018
};

car.make; //access 
car.model;

console.log(`make: ${car.make} ,model: ${car.model}`); //log
car.year=2024; //update the year
console.log(car);//log the object

//3
let fruit = {   //creating an object
    name: "apple",
    color: "green",
    sweetness: 6
};
console.log(fruit);
fruit.name;
fruit.sweetness;
console.log(`name: ${fruit.name} sweetness: ${fruit.sweetness}`);

fruit.color="red";
console.log(fruit);


//4
let book = {   //creating an object
    title: "harry potter",
    author: "john doe",
    pages: 100
};
console.log(book);
console.log(`title: ${book.title} author: ${book.author}`);

book.pages+=50;
console.log(book);

//5
let animal = {   //creating an object
    species: "lion",
    sound: "rour",
    isWild: true
};
console.log(animal);
console.log(`species: ${animal.species} sound: ${animal.sound}`);

animal.isWild=false;
console.log(animal);



//practice time
//1
let car1 = {   //creating an object
    make: "renault",
    model: "clio",
    year: 2018,
    printer:function(){
        console.log(this);
    }
};
car1.printer();
//2
console.log(`make: ${car1.make} ,model: ${car1.model}`); //log
//3
car1.year=2024; //update the year
console.log(car1);//log the object
//4
car1.color="black";
console.log(car1);

//5

//6
let carKeys=Object.keys(car1);
for (let i = 0; i < carKeys.length; i++) {
    if(typeof car1[carKeys[i]] !== "function") {
        console.log(`property: ${carKeys[i]}, value:${car1[carKeys[i]]}`);
    }
}

//7

let person1 = {
    firstName: "ori",
    lastName: "arbeli",
    age: 22,
    isStudent: true, 
    fullName: function(){
        console.log( this.firstName + " " +this.lastName);
    }
};
person1.fullName();
console.log(person1);

//8
let personKeys=Object.keys(person1);
console.log(personKeys);
