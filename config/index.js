const dotenv = require('dotenv');
dotenv.config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    databaseConnection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    corsOrigin: process.env.CORS_ORIGIN || 'https://client.twittr.com'
};

module.exports = config;
