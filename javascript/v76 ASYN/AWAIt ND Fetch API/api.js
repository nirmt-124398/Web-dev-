async function getData() {
    let x= await fetch('https://jsonplaceholder.typicode.com/todos/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'John Doe',
                email: 'john.doe@example.com'
            })
        })
    // await fetch('https://jsonplaceholder.typicode.com/todos/1'); ------------This is simplified approach but actual is defined above.
    let data= await x.json();
    return data
      
}
async function main() {
    console.log("Inside main()")

    let Deta= await getData();

    console.log(Deta);
    console.log("data is fetched...");
}
main()