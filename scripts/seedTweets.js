const connection = require('../lib/connect');
const debug = require("debug")("app:database");


const insertTweets = `INSERT INTO tweets (userId, content) 
VALUES
    (1, 'THIS IS MY first tweet'),
    (1, 'this is my second tweet'),
    (2, 'hello twitter'),
    (2, 'this is jane\\'s second tweet')
`; 


const printError = (msg) => (error) => {
    error && debug(msg, error)
};

connection.connect(error => {
    error && debug('error connecting to database', error);

    connection.query(insertTweets, printError('Error inserting tweets'));

    debug('inserting tweets done');
    
    connection.end();
})