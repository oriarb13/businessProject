const fs = require("fs")


/////קריאת קובץ
fs.readFile(`input.txt`,"utf8",(err,data) =>{
    if(err){
        console.error(err);        
    }
    console.log(data.toString());

    fs.writeFile(`output.txt`,data,(err) =>{
        if(err){
            console.error(err);        
        }
        console.log("file created");
    })
    fs.appendFile(`output.txt`,"\n message create successfully",(err) =>{
        if(err){
            console.error(err);        
        }
        console.log("file created");
    })    
})


//יצירת קובץ
// fs.writeFile(`output.txt`,str,(err) =>{
//     if(err){
//         console.error(err);        
//     }
//     console.log("file created");
// })


//להוסיף לקובץ
// fs.appendFile(`output.txt`,"\n message create successfully",(err) =>{
//     if(err){
//         console.error(err);        
//     }
//     console.log("file created");
// })
