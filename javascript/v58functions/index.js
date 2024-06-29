function fun1(name) {
    console.log("I am a function..." + name)
    console.log("I am also a function..." + name)
    console.log("I am a function too..." + name)
}

fun1("Nirmit")

function sum(a, b, c = 1) {
    return (a + b + c)
}

result1 = sum(1, 2)
result2 = sum(3, 4, 5)

console.log("Sum is " + result1)
console.log("Sum is " + result2)

const arrow = (x) => {
    console.log("I am an arow funtion with value " + x)
}

arrow(89)

// Arrow functions are a modern addition to JavaScript that simplify the syntax for defining functions, especially for short and simple functions