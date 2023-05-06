const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sql = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("User registered!");
        res.send("User registered!");
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
