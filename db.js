const Pool = require('pg').Pool
require('dotenv').config()
const pool = new Pool({
  user: "postgres",
  password: process.env.PG_PASSWORD,
  host: "localhost",
  port: 5432,
  database: process.env.PG_DB
})

module.exports = pool