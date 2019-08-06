const express = require("express");
const app = express();
const apiRouter = require("./routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/api", apiRouter);


app.listen(3000, function(){

});