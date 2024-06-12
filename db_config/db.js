require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT|| 7000;
const { DB_HOST, DB_USER, DB_PASSWORD, DATABASE } = process.env;

const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"evanghadiforum",
});

db.getConnection((err) => {
    if (err) {
        console.log("Database connection error: ", err.message);
    } else {
        console.log("Connection to database established successfully");
    }
});

app.listen(port, (err) => {
    if (err) {
        console.log("Server error: ", err.message);
    } else {
        console.log(`seServer is running correctly on port ${port}`);
    }
});