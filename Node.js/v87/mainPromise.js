import fs from "fs/promises";
import path from "path"; //IMPORTANT
import { fileURLToPath } from 'url';

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file_path =path.join(__dirname,"hello.txt")

let b= await fs.appendFile(file_path,"HelloBro\n")//We could have used writeFile instad of appendFile.
let a= await fs.readFile(file_path)

console.log(a.toString(),b);