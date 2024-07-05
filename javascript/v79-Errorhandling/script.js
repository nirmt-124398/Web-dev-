let a = prompt("Give 1st number");
let b = prompt("Give 2nd number");

if (isNaN(a) || isNaN(b)) {
    throw console.error("There is an error");
}

let sum = parseInt(a) + parseInt(b);
function main() {
    // let x = 1;
    try {
        console.log("answer : ", sum * x);
        return true

    } catch (error) {
        console.log('error aa gya bhai');
        return false
    }

    finally {

        console.log("apna code chal gya...");
    }


}

main()
