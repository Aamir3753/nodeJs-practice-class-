var express = require('express');
var bodyParser = require("body-parser");
var server = express();

const fs = require("fs");

server.use(bodyParser.urlencoded());
server.use(bodyParser.json());
server.use(express.static('./frontend'));
var users = [];

// Get Request for users
server.get('/getAllUsers', (req, res) => {
    res.json(users);
})
// Post requests  for users(adding new user)
server.post("/addUser", (req, res) => {
    users.push(req.body.username);
    res.end("User successfully added")

})

// Createing File
server.post("/createFile", (req, res) => {
    fs.appendFile("myFiles/myTextFile.txt", "Hello, World\n", (err) => {
        if (err === null) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            res.send("File Successfull Created");
        }
        console.log(err);
    })
})

// Read File
server.get("/getData", (req, res) => {
    fs.readFile("myFiles/myTextFile.txt", "utf8", (err, data) => {
        if (err) console.log(err);
        res.send(data);
    });
})

server.delete("/deleteFile", (req, res) => {
    fs.unlink('myFiles/myTextFile.txt', (err) => {
        if (err) console.log(err);
        res.send("File deleted successfully");
    })
})

server.listen(8080, () => console.log("server is running at http://localhost:8080"));