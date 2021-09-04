const Pool = require('pg').Pool

const pool = new Pool({
    user:'postgres',
    password:'1234',
    database:'sales',
    port:5432,
    host:'localhost'
})

module.exports = pool