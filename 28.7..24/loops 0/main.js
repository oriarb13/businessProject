//Basic 'for' Loop Exercises in JavaScript
//1
for (let index = 1; index <= 5; index++) {
 console.log(index);    
}

//2
for (let index = 0; index <= 9; index++) {
    console.log(index);    
   }

   //3

   for (let index = 10; index > 0; index--) {
    console.log(index);    
   }

   //4
   for (let index = 2; index <= 10; index+=2) {
    console.log(index);    
   }

   //5
   for (let index = 1; index <= 10; index+=2) {
    console.log(index);    
   }

   //6
   for (let index = 0; index <= 15; index+=3) {
    console.log(index);    
   }

   //7
   for (let index = 1; index <= 20; index+=2) {
    console.log(index);    
   }
   //8
   for (let index = 2; index <= 20; index+=2) {
    console.log(index);    
   }

   //9
   for (let index = 10; index >= 0; index-=2) {
    console.log(index);    
   }

   //10
   for (let index = 5; index <= 25; index+=5) {
    console.log(index);    
   }

   //11
   for (let index = 1; index <= 5; index++) {
    console.log("*");    
   }

   //12
   for (let index = 1; index <= 3; index++) {
    console.log("hello");    
   }

   //13
   for (let index = 1; index <= 3; index++) {
    console.log(index +"!");    
   }

   //14
   for (let index = 1; index <= 5; index++) {
    console.log(String.fromCharCode(index+96));    
   }

//15
let str3="";
for (let index = 0; index < 4; index++) {
    str3+="2 ";
}
console.log(str3);

//16
let given=[1,2,3,4,5]
for (let index = 0; index < given.length; index++) {
    console.log( given[index]);
}

//17
let giv1=['a', 'b', 'c', 'd'];
for ( i = 0 ; i < giv1.length; i++) {
  console.log( giv1[i]); 
}

//18

let giv2=[10, 20, 30, 40, 50];
for (let index = 0; index < giv2.length; index++) {
    console.log(giv2[index]);    
}

//19

let arr1 = [1, 2, 3, 4, 5, 6];
for (let index = 1; index < arr1.length; index+=2) {
     console.log(arr1[index]);
}


//20

let colors = ['red', 'green', 'blue'];
for (let index = 0; index < colors.length; index++) {
    console.log("color: "+colors[index]);    
}

//21
let sum=0;
for (let index = 1; index <= 5; index++) {
   sum+=index;
}

//22
let sum1=1;
for (let index = 1; index <= 5; index++) {
   sum*=index;
}

//23

array2=[1, 2, 3, 4, 5, 6, 7, 8];
let count=0;
for (let index = 0; index < array2.length; index++) {
      if (array2[index] % 2 ==0) count++; 
} 

//24

let array4 = [10, 5, 8, 12, 3];
    let largest = array4[0];
    for (let index = 0; index < array4.length; index++) {
        if(array4[index] > largest) largest=array4[index];
    }

    //25
    let sum2=0;
    for (let index = 2; index < 10; index+=2) {
        sum+=i;
    }

    //26
let numLines=5
    for (let index = 0; index <= numLines; index++) {
        console.log("*".repeat(index));
    }

    //27
    for (let index = 0; index <= 2; index++) {
        console.log("*".repeat(3));
    }
    
    //28
    let numLines2=5;
    for (let index = 0; index <= numLines2; index++) {
        console.log(index.toString().repeat(index));
    }

    //29

    function multi4(numMult){
        let line3 = ``;
        for (i = 1 ; i <= numMult ; i++){
            for(j =1; j <= numMult;j++){
                line3 += String(i*j)+` `
            }
            line3+=`\n`
        }
        return line3;
    }
    console.log(multi4(5));


    //30
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
