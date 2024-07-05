async function getData() {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 3000);
    });
}

async function main() {
    console.log("computation started...");
    console.log("Starting Data fetching");

    let data= await getData();


    console.log(data);

    console.log("Wait for getData is over");
    
}

main();

