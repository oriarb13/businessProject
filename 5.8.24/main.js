
///////////////////////////////////////////////////////////////////////////הדפסה של כמה גדולים שווים

const persons=[
    {
        name:"baba",
        age:14
    },
    {
        name:"mama",
        age:34
    },
    {
        name:"lala",
        age:54
    },
    {
        name:"dada",
        age:54
    } 
]

function older(persons){
    let oldOne=persons[0].age;
    let oldest=persons[0].name;
    for (let i = 1; i < persons.length; i++) {
        if (oldOne < persons[i].age) {
            oldOne=persons[i].age;
            oldest=persons[i].name;
        }
        else if (oldOne = persons[i].age){
            oldest = `${oldest}, ${persons[i].name}`
        }
    }
    return oldest;
}

console.log(older(persons));




/////////////////////////////////////////////////////////////////////////////

const nested=[[1,2,3,],[4,5,6],[7,8,9]];
function summing(nested){
let sum1=0;
for (let i = 0; i < nested.length; i++) {
    for (let j = 0; j < nested[i].length; j++) {
        sum1+= nested[i][j]; 
    }    
}
return sum1
}

console.log(summing(nested));