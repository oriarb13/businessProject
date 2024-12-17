//1
function two(x){
    let num="";
    for (let i = 1; i < x; i++) {
        for (let j = 1; j < x; j++) {
            num+=`${i*j} `   
        }
        num+=`\n`
    }
    console.log(num);
}
two(8);


//2
    let num="";
    let count=0;
    for (let i = 1; i < 3; i++) {
        for (let j = 1; j < 3; j++) {
            count++;
            num+=`${count} `;   
        }
        num+=`\n`
    }
    console.log(num);


    //3
    function triangle1 (x) {
        let num="";
        for (let i = 0; i < x+1; i++) {
            for (let j = 0; j < i; j++) {
                num+="*";                
            }
            num+=`\n`;
            
        }
        console.log(num);
    }
    triangle1(4);


    //4
    function grid(x) {
        let num1="";
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < x; j++) {
                num1+=`${i},${j}|`;
            }
            num1+=`\n`;   
        }
        console.log(num1);
    }
    grid(4);


    //5
    

