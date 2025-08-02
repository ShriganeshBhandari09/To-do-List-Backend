
const connection = require("./DB/connection");
const express = require("express");

connection.connect((err) => {
    if (err) throw err;
    console.log("Database Connected Successfully!");
});


const app = express();


app.get("/", (req, res) => {
    res.json("Hello World!");
});

app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port ${process.env.APP_HOST}/${process.env.APP_PORT}`);
});



