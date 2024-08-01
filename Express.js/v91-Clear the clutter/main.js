import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\nirmi\\OneDrive\\Desktop\\web dev\\Web-dev-\\Express.js\\v91-Clear the clutter";

let files = await fs.readdir(basepath);

for (const file of files) {
    let exitExtension = file.split(".")[file.split(".").length -1];
    console.log(exitExtension);
    if (fsn.existsSync(path.join(basepath,exitExtension))) {
        //Make a new fodler for this extension
        fs.rename(path.join(basepath,exitExtension),path.join(basepath,exitExtension,file))
    }
    else{
        fs.mkdir(exitExtension)
        
    }
};