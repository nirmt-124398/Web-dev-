let fact = prompt("Give a no. to find its factorial.");
let factAns = 1;
for (let index = fact; index > 0; index--) {
    const element = index;
    factAns = factAns * element;
}

console.log(factAns);