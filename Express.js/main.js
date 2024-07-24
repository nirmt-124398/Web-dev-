const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))
// we can make muptiple ststic file
app.get("/", (req, res) => {
  res.send("hello World!");
});
app.get("/about_us", (req, res) => {
  res.send("About Us!");
});
app.get("/blogs", (req, res) => {
  res.send("Blogs!");
});
        // app.get("/blogs/Intro_to_Js", (req, res) => {
        //   res.send("Hello,js!");
        // });
        // app.get("/blogs/Intro_to_py", (req, res) => {
        //   res.send("Hello,py!");
        // });
// Instead we can do

app.get("/blogs/:slug", (req, res) => {
    console.log(req.params);//It outputs varible we made like :slug
    console.log(req.query);//It outputs Query that is after ?
    res.send(`Blogs! ${req.params.slug}`);
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
