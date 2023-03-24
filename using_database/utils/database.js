const mysql = require("mysql2");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "firstproject",
  password: "root",
  multipleStatements: true,
  insecureAuth: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log("Connection Failed"+err);
  }
});

module.exports = mysqlConnection;
