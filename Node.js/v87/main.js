const { error } = require("console");
const fs=require("fs")

console.log("Starting..");

//////////////////////THIS IS WRITING OPERATION//////////////////////////////////////////////////

//This waits for writing to be done then purform otherr task .therefore causing problem
fs.writeFileSync("nirmit.txt","Hello Nirmit")  

//Instead we can use.

fs.writeFile("nirmt.txt","This is asynchornous",()=>{
    console.log("Done");//This Done will come after Ending..

    //////////////////////THIS IS READING OPERATION//////////////////////////////////////////////////
    fs.readFile("nirmt.txt",(error,data)=>{
            console.log(error,data.toString());
    })

})


fs.appendFile("nirmit.txt","\nThis is nirmit too.",(e,d)=>{
    console.log(e,d);
})
console.log("Ending..");

