const express = require('express');
const path = require("path");
const dotenv = require("dotenv");
const app = express();
const formProcess = require("./form-process");
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

// configraration with env.
dotenv.config();

const publicDir = path.join(__dirname, "./public");
app.use(express.static(publicDir));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
    res.end();
});

app.get('/survey', (req, res) => {
    res.render("index");
    res.end();
});

app.get('/viet', (req, res) => {
    res.render("viet");
    res.end();
});

app.get('/data', formProcess.getData);

app.post('/form-process', formProcess.submit);

app.listen(port, () => {
    console.log("Connected - Port " + port);
})