async function sleep() {
    return new Promise((resolve, reject) => {
        resolve(45);
    })
}


// IIFE
(async function main() {
    let a= await sleep()
    console.log(a)
    let b= await sleep()
    console.log(b)

    //Destructuring

let [x,y,...rest]=[1,2,3,4,5,6,7,8,9,10]  //This ... is imnportant
console.log(x,y,rest);

// similary we can do with objetcs

let obj={
    c:1,
    d:2,
    e:3,
}
let {c,d}= obj;
console.log(c,d);


// Spread concept

function sum(a,b,c) {
    return a+b+c    
}

let arr=[1,2,3]

console.log(arr[0]+arr[1]+arr[2]);                       
console.log(sum(arr[0],arr[1],arr[2]));
console.log(sum(...arr));


})()

