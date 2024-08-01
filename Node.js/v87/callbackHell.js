const fs=require("fs")
// NOW THIS CAUSE back hell
fs.writeFile("nirmt.txt","This is asynchornous",()=>{
    console.log("Done");//This Done will come after Ending..

    //////////////////////THIS IS READING OPERATION//////////////////////////////////////////////////
    fs.readFile("nirmt.txt",(error,data)=>{
            console.log(error,data.toString());
            //again
            fs.writeFile("nirmt.txt","This is asynchornous",()=>{
                console.log("Done");//This Done will come after Ending..
            
                //////////////////////THIS IS READING OPERATION//////////////////////////////////////////////////
                fs.readFile("nirmt.txt",(error,data)=>{
                        console.log(error,data.toString());
                        //again
                })
            
            })
    })

})