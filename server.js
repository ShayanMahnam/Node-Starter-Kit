const { query } = require("express");
const express = require("express")
const app = express()


// app.get("/", function(req,res){
//     res.send("Hello Node!")
//     console.log("Received first req")
// })


app.get("/chocolate", function (req, res) {
  res.send("Mm chocolate :O");
});

app.get("/", function (req, res) {
  let searchQuery = req.query.search;
  res.send("Hello World! You searched for " + searchQuery);
});

app.get("/multiply", function(req,res){
    let val1 = req.query.val1
    let val2 = req.query.val2
    res.send(`${val1} * ${val2} = ${val1 * val2}`)
})

app.listen(3005, function(){
    console.log("Server is listening on port 3005. Readdy to accept requests!")
})