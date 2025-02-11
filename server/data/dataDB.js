const pg = require('pg');
const dotenv = require("dotenv");


dotenv.config({
    path: "../development.env"
});
const {Pool, Client} = pg;

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

module.exports = pool;