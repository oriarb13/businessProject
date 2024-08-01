function aircond(array1){
    let sum=0 ;
    let count=0;
    for (let i = 0; i < array1.length; i++) {
        sum+= array1[i];
        counte++;
    }
    return sum/count;
}


//1
let star="";
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        star+="*";
        
    }
    star+=`\n`;
}
console.log(star);

//2
let str="";
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        str+=`${j+i} `;
    }
    str+=`\n`;
}
console.log(str);

//3
let star1="";
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        star1+="*";
    }
    star1+=`\n`;
}
console.log(star1);


//4
let str1="";
for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
        str1+=`${j*i} `;
    }
    str1+=`\n`;
}
console.log(str1);


//5
let star2="* * * * *";
for (let i = 1; i < 5; i++) {
    star2+=`\n`;
    star2+="*"

    for (let j = 0; j < 7; j++) {
        star2+=" ";
    }
    star2+="*"
}
star2+=`\n* * * * *`
console.log(star2);



//6
let str2="";
for (let i = 0; i < 5; i++) {
    for (let j = 1; j < 6; j++) {
        str2+=`${j+i*5} `;
    }
    str2+=`\n`;
}
console.log(str2);


//7
let str3="";
for (let i = 1; i < 6; i++) {
    for (let j = 0; j < 5-i; j++) {
        i.toString();
        str3+=` `;
        
    }
    str3+=`${`${i} `.repeat(i)}` ;
    str3+=`\n`;
}
console.log(str3);



//8
let str4="";
for (let i = 0; i < 5; i++) {
    for (let j = 11; j < 17; j++) {
        if((j-i) % 2 === 1) str4+=`0 `;
        if((j-i) % 2 === 0) str4+=`1 `;
    }
    str4+=`\n`
}
console.log(str4);


//9
let str5="";
for (let i = 1; i < 6; i++) {
    for (let j = 0; j < 5-i; j++) {
        i.toString();
        str5+=` `;
    }
    str5+=`${`${i} `.repeat(i)}` ;
    str5+=`\n`;
}
console.log(str3);




//11
let str6="";
let count2=1;
for (let i = 1; i < 6; i++) {
    for (let j = 1; j <= i ; j++) {
        str6+=` ${count2}`;
        count2++;
    }
    str6+=`\n`

}
console.log(str6);



//12
let str7="";
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4 ; j++) {
        i=i.toString()
        str7+=`${i.repeat(j)} `;
    }
    str7+=`\n`
}
console.log(str7);


//13
let star3="";
for (let i = 5; i > 0; i--) {
    for (let j = i; j > 0; j--) {
        star3+="* ";
    }
    star3+=`\n`;
}
console.log(star3);

//14
let row1="";
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
        row += Math.max(i, j) + ' ';

    }
    row1+=`${row} \n`
}
console.log(row1);

