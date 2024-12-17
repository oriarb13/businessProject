
// const capitalizeWords =(sentence)=>{
//     const words = sentence.split(' ')
//     console.log(words);
    
//     words.map(word => let capital = word[0].toUpperCase() + word.slice(1));
//     console.log(words);

//     const newSen= words.join(' ')
//     return (newSen);
// }
// console.log(capitalizeWords("hello world"))


// const capitalizeWords1 =(sentence)=>{
//     const words = sentence.split(' ')
//     console.log(words);
//     const newArr=[]
//     words.forEach((word) => {
//         newArr.push(word[0].toUpperCase())
//         for (let index = 1; index < word.length; index++) {
//             newArr.push(word[index])
//         }    
//     });
//     const newSen= newArr.join(" ")
//     return (newSen);
// }



// const capitalizeWords1 =(sentence)=>{
//     const words = sentence.split(' ')
//     const newArr=[]
//     words.forEach((word) => {
//         let capital = word[0].toUpperCase()
//         newArr.push(capital+word.substring(1))
//         }    
        
//     );
//     const newSen= newArr.join(" ")
//     return (newSen);
// }



// console.log(capitalizeWords1("hello world"))
































// const numArr=[1, 2, 3, 4, 5, 6]
// const filterEvenNumbers = (numbers)=>{
//     const newNums=[]
//     numbers.forEach(number => {
//         if(number%2===0)newNums.push(number)        
//     });
//     return newNums
// }

// console.log(filterEvenNumbers(numArr))



function findLongestWord(words) {
    let longest = words[0];  
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];  
        }
    }
    return longest;
}

console.log(findLongestWord(["apple", "banana", "cherdddry"])) 
