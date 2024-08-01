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


//6
let smartphone = {   //creating an object
    brand: "iphone",
    model: "15",
    storageGB: 128
};
console.log(smartphone);
console.log(`brand: ${smartphone.brand} storage: ${smartphone.storageGB}`);

smartphone.model="15 pro ";
console.log(smartphone);


//7
let recipe = {   //creating an object
    name: "pasta",
    ingredients: ["pasta","salt","pepper"],
    preparationTime: 30
};
console.log(`name: ${recipe.name} ingredients: ${recipe.ingredients[0]}`);

recipe.ingredients.push=("hot water");
console.log(recipe);

//8
let movie = {   //creating an object
    title: "spiderman",
    director: "john doe",
    releaseYear: 2000
};
console.log(`title: ${movie.title} director: ${movie.director}`);

movie.releaseYear=2022;
console.log(movie);

//9
let country = {
    name: "Israel",
    capital: "Jerusalem",
    population: 983339
};
console.log(country.name + " " + country.capital);
country.population += 1000000;
console.log(country.population);

//10
let computer = {
    brand: "lenovo",
    CPU: "Ori",
    RAMinGB: 6
};
console.log(computer.brand + " " + computer.CPU);
computer.RAMinGB *= 2;
console.log(computer.RAMinGB);


//11
let playlist = {   //creating an object
    name: "ori",
    songs: ["aga","bada","gada"],
    duration: 9
};
playlist.songs.push=("lala");



//12
let bankAcount = {   //creating an object
    accountNumber: "0523",
    balance: 200,
    isActive: true,
    deposite: function(amount){
        this.balance+=amount;
        console.log(`The new balance is ${this.balance}`);
    },
    
    withdraw: function(amount){
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`The new balance is ${this.balance}`);
        }
        else{
            console.log(`you cant withdraw from your account`);
        }
    }
};
bankAcount.deposite(20);
console.log(bankAcount);


//13

let circle = {   //creating an object
    radius: 10,
    color: "blue",
    calculator1: function(){
        return Math.pow((this.radius),2)*Math.PI;
    },
    
    calculator2: function(){
        return (this.radius)*2*Math.PI;
    }
};

//14
let student = {
    name: "ori",
    grades: [60 , 80 , 90],
    calculateAverage: function(){
        let average = this.grades.reduce(function myFun (total , num){
            return total + num;
        } , 0) / this.grades.length
        console.log(`The average is ${average}`);
    },
    getLetterGrade: function(){
        let letter = [this.grades.map(function  myFunn (num){
        if(num  >= 90) return "A";
        else if(num >= 80) return "B";
        else if (num >= 70) return"C";
        else if (num >= 60) return "D";
        else return "F";
    })]
    console.log(letter);
}
};


student.calculateAverage();
student.getLetterGrade();




//15
let toDo = {   //creating an object
    tasks: ["buy","sell","remove"],
    completeTasks: ["clean","jump","run"],
    addTask: function(task){
        this.tasks.push(task);
    },
    completedTask2: function(task){
        this.completeTasks.push(task)
        this.tasks.filter(function move(){
            return this.tasks !== task;
        })
    }, 
    displayTasks: function(){
        console.log(this.tasks);
    }
};


toDo.displayTasks();
toDo.completedTask2("swim")
console.log(toDo.completeTasks);




//16
book={
    title:"harry",
    author: "John Doe",
    isbn:"1234",
    isAvailable:true,
    checkOut:function(){
        if(this.isAvailable){
            this.isAvailable=false;
            console.log(`you take the book ${this.title}, isbn:${this.isbn}`);
        }
        else console.log(`the book ${this.title}, isbn:${this.isbn} is not available`);
    },
    return:function(){
        this.isAvailable=true;
        console.log(`you return the book ${this.title}, isbn:${this.isbn}`);
    }
};
book.checkOut();
book.return();


//17
colorMixer={
    color1:"blue",
    color2:"yrllow"
    mix: function(){

    }
};


// //22
// function getRandomIntInclusive(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
// }
// console.log(getRandomIntInclusive(1,6));
//     dice={
//     sides: 6,
//     lastRoll:0 ,
//     roll:function(){
//         dice.lastRoll =getRandomIntInclusive(1,this.sides);
//         return dice.lastRoll;
//     } 
// }
// dice.roll();
// console.log(dice);






































// //practice time
// //1
// let car1 = {   //creating an object
//     make: "renault",
//     model: "clio",
//     year: 2018,
//     printer:function(){
//         console.log(this);
//     }
// };
// car1.printer();
// //2
// console.log(`make: ${car1.make} ,model: ${car1.model}`); //log
// //3
// car1.year=2024; //update the year
// console.log(car1);//log the object
// //4
// car1.color="black";
// console.log(car1);

// //5

// //6
// let carKeys=Object.keys(car1);
// for (let i = 0; i < carKeys.length; i++) {
//     if(typeof car1[carKeys[i]] !== "function") {
//         console.log(`property: ${carKeys[i]}, value:${car1[carKeys[i]]}`);
//     }
// }

// //7

// let person1 = {
//     firstName: "ori",
//     lastName: "arbeli",
//     age: 22,
//     isStudent: true, 
//     fullName: function(){
//         console.log( this.firstName + " " +this.lastName);
//     }
// };
// person1.fullName();
// console.log(person1);

// //8
// let personKeys=Object.keys(person1);
// console.log(personKeys);


