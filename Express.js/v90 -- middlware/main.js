const { log } = require('console')
const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
//Middleware's are used to update/handle req or res before or after processing.
app.use((req, res, next) => {
    console.log(req.headers);
    req.nirmit="Hello this is Nirmit Rampal."
    fs.appendFileSync("append.txt", `${Date.now()} is a ${req.method}.\n`)
    console.log('m1');
    next()
})
app.use((req, res, next) => {
    console.log('m2');
    next()
})

app.get('/', (req, res) => {
    console.log(req.nirmit);
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})