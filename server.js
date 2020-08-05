var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
var distDir = __dirname + "/dist/notes-app";
app.use(express.static(distDir));

const PORT = process.env.PORT || "4200";

app.listen(PORT);
