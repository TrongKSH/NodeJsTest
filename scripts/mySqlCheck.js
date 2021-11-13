const dbConfig = require('../config/dbConfig');
const mysql = require('mysql2/promise');

module.exports = db = {};

initialize().then((res)=> process.exit(1));

async function initialize() {
    // create db if it doesn't already exist
    const connection = await mysql.createConnection({
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        user: dbConfig.USER,
        password: dbConfig.PASSWORD
    });
    console.log('Connected')

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.DB}\`;`);
    console.log('Database created')
}
/*

const con = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.DB}\`;`, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});*/
