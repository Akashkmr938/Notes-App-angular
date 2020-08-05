var express = require("express");

var app = express();
app.use(express.json());
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
