console.log("PROMISES");

let prom1 = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand < 0.5) {
        reject("No random no. supported for your requirement.")
    }
    else {

        setTimeout(() => {
            console.log("Promise triggered...");
            resolve("Nirmit")
        }, 3000);
    }
})

prom1.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
}
)


// READ NOTES 