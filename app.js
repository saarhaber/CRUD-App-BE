const express = require("express");
const app = express();
const apiRouter = require("./routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/api", apiRouter);


// app.post("/students", (req, res, next) => {
//   let newStudent = req.body;
//   students.push(newStudent);
//   res.send(newStudent);
// })

app.listen(3000, function(){

});