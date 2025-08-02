const mySql = require("mysql");
require("dotenv").config();

const connection = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "to_do_list"
});

module.exports = connection;