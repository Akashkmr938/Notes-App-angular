var express = require("express");
const { PollingWatchKind } = require("typescript");

var app = express();
app.use(express.json());
var distDir = __dirname + "/dist/notes-app";
app.use(express.static(distDir));

const PORT = process.env.PORT || "8080";

app.listen(PORT);
