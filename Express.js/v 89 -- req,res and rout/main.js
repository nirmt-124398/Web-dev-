const express = require("express");
const blog = require('./routes/blog')
const app = express();
const port = 3000;

app.use(express.static("public"));
// we can make multiple static file
app.use('/blog', blog)
app.get("/", (req, res) => {
  // .get used to send query through  URL can be seen in URL logs
  res.send("hello World!");
});
app.post("/", (req, res) => {
  //.post used to send query through secretly and it can't be seen in URL logs.This is generally used for sensitive information.
  console.log("POST req hitting");
  res.send("hello World This is POST request!");
}); 

app.get("/index", (req, res) => {
  res.sendFile('templates/index.html',{root:__dirname});
});
app.get("/api", (req, res) => {
  res.json({a:1,name:["nirmit","rampal" ]});
});


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
