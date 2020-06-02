const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/home.html")
})

app.get("/project", function (req, res) {
    res.sendFile(__dirname + "/public/projects.html")
})

app.get("/team", function (req, res) {
    res.sendFile(__dirname + "/public/team.html")
})

app.get("/dbox", function (req, res) {
    res.sendFile(__dirname + "/public/dbox.html")
})

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/public/error.html")
})

app.listen(PORT);