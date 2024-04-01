const config = require('../config');
const debug = require("debug")("app:database");

const mysql = require('mysql2');

const connection = mysql.createConnection(config.databaseConnection);
 
connection.connect(error => {
    if (error) {
        console.error('Error connecting to the database:', error);
        return;
    }
    debug('Connected to the database');
});
  
module.exports = connection;