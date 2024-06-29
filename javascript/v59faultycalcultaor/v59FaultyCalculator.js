let random = Math.random()

let a=prompt("Give first number")
let b=prompt("Give second number")
let c=prompt("Give operation")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}



if (random>0.1) {

    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
} else {
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/