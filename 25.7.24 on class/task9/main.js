//JavaScript String Methods Exercises
function stringL(str) {return str.length ;}
console.log(stringL("deceveve"));
//2
function stringUp(str12) {return str12.toUperCase();}
console.log(stringLower("dASS"));
//3
function stringLower(str1) {return str1.toLowerCase();}
console.log(stringLower("dASS"));
//4
function stringSpecific(str1,num1) {return str1[num1-1];}
console.log(stringSpecific("dASS",1));
//5
function stringBetween(text,num1,num2) {return text.substring(num1, num2);;}
console.log(stringBetween("dASS",1,3));
//6
function stringReplace(text,char2,char11) {return text.replaceAll(char2, char11);}
console.log(stringReplace("dASS","S",2));
//7
function stringTrim1(text4) {console.log( text4.trim());}
stringTrim1("    DVVE   ")
//8
function stringIfStart(text,char2) {
 if(text[0]===char2) return true;
 else return false}
console.log(stringIfStart("dASS","d"));
//9
function stringCheckEnd(text,char2) 
{
if(text.endsWith(char2)) return true;
else return false;}
console.log(stringCheckEnd("dqcwwcd","cd"));
//10
function stringIndex(str,char1){
    return (str.indexOf(char1)+1);
}
console.log(stringIndex("ecerf","r"));
//11
function splitString(str){
    let myArray = str.split(" ");
    return myArray;
}
console.log(splitString("wcwed wed dwdew wedww"));
//12
function repeats1(text,num1){
    return text.repeat(num1);
}
console.log(repeats1("xdf",3));
//13
function concatenates(text1,text2){
    return text1.concat(text2);
}
console.log(concatenates("fdd","xaxa"));
//14
function padStr(str,length1,char1){
    return str.padStart(length1,char1);
}
console.log(padStr("arbeli",10,"o"));
//15
function extract(str1,n){
    console.log(str1.slice((n-1),str1.length));
}
extract("dddas",3);
//16
function replace1(text1,value1,string1){
    return text1.replace(value1,string1);
}
console.log(replace1("ori arbeli","arb",111));
//17
function checkString(string1,string2){
    return string1.includes(string2);
}
console.log(checkString("ori arbeli","arhb"));
//18
function lastChar(string1){
    return string1[string1.length-1];
}
console.log(lastChar("ori"));
//19
function isEmpty(str1){
    if (str1.length===0) return "the string is empty";
    else return "the string is not empty"
}
console.log(isEmpty(""));
//20
function extract(str1,n){
    console.log(str1.slice((n-1),str1.length));
}
