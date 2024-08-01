// count the char in a string
function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      let currentChar = string[i];
      if (char === currentChar) {
        count++;
      }
    }
  
    console.log(`count of ${char}: ${count} in ${string}`);
  }
  
  // countChar("hello", "l");
  
  //////////////////////////////////////////////////////////
  
  // count the char in a strings array (Verbose)
  function countCharInArrayVerbose(elements, char) {
    let count = 0;
  
    for (let i = 0; i < elements.length; i++) {
      let currentElement = elements[i];
  
      for (let j = 0; j < currentElement.length; j++) {
        let currentChar = currentElement[j];
        if (char === currentChar) {
          count++;
        }
      }
    }
  
    console.log(`count of ${char}: ${count}`);
  }
  
  // count the char in a strings array
  function countCharInArray(elements, char) {
    let count = 0;
    for (let i = 0; i < elements.length; i++) {
      for (let j = 0; j < elements[i].length; j++) {
        if (char === elements[i][j]) {
          count++;
        }
      }
    }
  
    console.log(`count of ${char}: ${count}`);
  }
  
  let names = ["sasha", "omer", "sason", "shai"];
  // countCharInArray(names, "s");
  // countCharInArray(names, "a");
  // countCharInArray(names, "b");
  
  //////////////////////////////////////////////////////////
  
  function sumInArray(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      console.log("i", i);
      let currentNumber = nums[i];
      console.log("currentNumber", currentNumber);
      sum = sum + currentNumber;
    }
  
    console.log(`sum is: ${sum}`);
  }
  
  // sumInArray([10, 4, 5]);
  
  //////////////////////////////////////////////////////////
  
  function sumNestedNumbersArray(nestedNumbers) {
    let sum = 0;
  
    for (let i = 0; i < nestedNumbers.length; i++) {
      let currentArray = nestedNumbers[i];
      console.log("currentArray", currentArray);
      for (let j = 0; j < currentArray.length; j++) {
        let currentNumber = currentArray[j];
        console.log("currentNumber", currentNumber);
        sum = sum + currentNumber;
        console.log("sum", sum);
      }
    }
  
    console.log(`sum is: ${sum}`);
  }
  
  // sumNestedNumbersArray([[5, 2], [3, 20, 10], [1]]); // 41
  
  //////////////////////////////////////////////////////////
  
  /*Exercise 1: Star Pattern
  Objective: Create a program that prints a right triangle pattern of stars (*).
  Instructions:
  Use two nested loops. The outer loop should iterate through numbers 1 to 5 (representing the row number).
  The inner loop should print stars equal to the current row number.
  Each row should end with a new line.
  Example Output: 
  *
  **
  ***
  ****
  *****
  
  */
  
  function starPattern_1() {
    for (let i = 1; i <= 5; i++) {
      let stars = "";
      for (let j = 1; j <= i; j++) {
        stars += "*";
      }
      console.log(stars);
    }
  }
  
  function starPattern_2() {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= i; j++) {
        stars += "*";
      }
      stars += " ";
    }
    console.log(stars);
  }
  
  function starPattern_3() {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= i; j++) {
        stars += "*";
      }
      stars += "\n";
    }
    console.log(stars);
  }
  
  // starPattern_1();
  // starPattern_2();
  // starPattern_3();
  
  /*
  Exercise 2: Multiplication Table
  Objective: Write a program that prints a multiplication table for numbers 1 through 5.
  Instructions:
  Use two nested for loops. The outer loop should iterate through numbers 1 to 5.
  The inner loop should also iterate through numbers 1 to 5.
  Multiply the numbers from the outer and inner loops and print the result.
  Example Output:
  Copy code
  1 2 3 4 5
  2 4 6 8 10
  3 6 9 12 15
  4 8 12 16 20
  5 10 15 20 25
  */
  
  function makeMultTable() {
    for (let i = 1; i <= 10; i++) {
      let row = `Mult of ${i} --- `;
      for (let j = 1; j <= 10; j++) {
        row += i * j + " ";
      }
      console.log(row);
    }
  }
  
  // makeMultTable();
  /*
  Exercise 3: Array Search
  Objective: Find a specific number in a 2D array and print its position.
  Instructions:
  Create a 2D array (e.g., let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];).
  Use two nested loops to iterate over the elements of the array.
  Check each element to see if it matches the target number.
  If the target number is found, print its position (row and column).
  Example Output:
  For target = 5, output: Found 5 at position (1, 1)
  For target = 7, output: Found 7 at position (2, 0)
  */
  
  function searchInArray(array_2D, target) {
    let row = null;
    let col = null;
  
    for (let i = 0; i < array_2D.length; i++) {
      let currentArray = array_2D[i];
      console.log("currentArray", currentArray);
  
      for (let j = 0; j < currentArray.length; j++) {
        let currentNumber = currentArray[j];
        console.log("currentNumber", currentNumber);
        if (currentNumber === target) {
          row = i;
          col = j;
          break;
        }
      }
      if (row !== null || col !== null) {
        break;
      }
    }
  
    if (row !== null || col !== null) {
      console.log(
        `For target = ${target}, output: Found ${target} at position (${row}, ${col})`
      );
    } else {
      console.log(`Target ${target} not found`);
    }
  }
  
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  searchInArray(arr, 6);
  

  //4
  function vowelsOfStr(str){
    let vowels = "aeiouAEIOU";
    let counter2 = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if(str[i] === vowels[j]) counter2++;
        }
        
    }
    return `the number of vowels in  ${str} is:  ${counter2}`;
  }
  console.log(vowelsOfStr("oriarbeli"));


  //5
  function reverse(str){
    let newstr = "";
    for (let i = str.length-1; i >= 0 ; i--) {
        newstr+=str[i]
    }
    return `the reverse string of ${str} is:  ${newstr}`;
  }
  console.log(reverse("ori arb"));




  //6
  function pattern(numOf){
    let line4 = ``;
    for (i = 1 ; i <= numOf ; i++){
        for(j =1; j <= i ;j++){
            line4 += String(i);
        }
        line4+=`\n`;
    }
    return line4;
}   
console.log(pattern(6));





//7

function sum2Darr(arr){
    let sum=0;
    for (i = 0 ; i < arr.length; i++){
        for (j = 0 ; j < arr[i].length; j++){
            if(arr[i][j])
            sum += arr[i][j];
    
        }
    }    
    console.log(sum);;
    
}
sum2Darr([[1,2,3],[4,3,2]]);


//8
function freq(str){
  let obj={
  };
  for (let i = 0; i < str.length; i++) {
    if(!obj[str[i]]){
      for (let j = 0; j < str.length; j++) {
         if(str[i] === str[j]){
          if(!obj[str[i]]) obj[str[i]]=1;
          else obj[str[i]]++;           
         } 
      }  
    }
  }
 console.log(obj);
}
freq("okkhello")
//9
function Convert(arr1){
   let newarr=[];
   for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      newarr.push((arr1[i])[j])

    }
    
   }
   console.log(newarr);
}
Convert([[1,2,3],[4,5,6]]);




//10
function metrix(arr1){
    let newarr=[];
    for (let i = 0; i < arr1.length; i++) {
        let currentarr= arr1[i];
        console.log(currentarr);
        for (let j = 0; j < currentarr.length; j++) {
            let currentnum = currentarr[j];
            console.log(currentnum);
            newarr.push(currentnum);

        }
     
    }
    console.log(newarr);
 }
 metrix([[1,2,3],[4,5,6]]);





//11
function palindrome(str){
    for (i = 0 ; i < str.length ; i++ ) {
        for (j = 0 ; j < 1 ; j++){
        if(str[i] !== str[str.length - 1 - i] ) 
            return false;
        }
    }
    return true
}

console.log( palindrome("orro"));


//12
function common(arr1,arr2){
    let element1=`common elements:`;

    for( i = 0 ; i < arr1.length ; i++ ){
        for ( j = 0 ; j < arr2.length; j++){
            if (arr1[i] === arr2[j]) element1+=arr1[i]+","; 
    
        }
    }
    console.log(element1);
}
common([1,2,3,4],[6,5,1,3,1]);




//13
function prime(start,end){
  let primeNumbers="prime numbers: ";
  for (i = start; i <= end; i++){
        let bool1=true;
        for (j = 2; j <= Math.sqrt(i)  ; j++){
            if(i%j === 0 ) {
                bool1=false;
                break;
        }
        if(bool1) primeNumbers += i+",";
        }
    }
    return primeNumbers;
}
console.log(prime(10,20));



//14

function sum5(arr1,i){
  let newarr=[];
  let sum = 0;
  //let sum2 = 0;
  for (let i = 0; i < arr1.length; i++) {
      let currentarr= arr1[i];
      for (let j = 0; j < currentarr.length ; j++) {
          let currentnum = currentarr[j];
          sum+= currentarr[j];
      }
    }
}

function sort(arr2D){
let newArr=[];
let sum2 = 0;
function sum5(arr1){
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum+= arr1[i];
  }
  return sum;
}
let sum3 =sum5(arr2D[i]);
for (let j = 1; j < arr2D.length; j++) {
  sum2=sum5(arr2D[j]);
  if(sum3 <= sum2){
    newArr.splice(j-1,j-2);
    break
  }
 
}
}





//       if(sum >= sum2){
//         sum2 = sum;
//         newarr.unshift (sum2);
//       }
//       else{ 
//         for (let k = 0; k < newarr.length; k++) {

//         } 
//       } 

   
//   }
//   console.log();
// }

// //15
