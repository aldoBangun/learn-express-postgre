const { Pool } = require('pg')
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env

const connection = new Pool({
   host: DB_HOST,
   port: DB_PORT,
   user: DB_USER,
   password: DB_PASSWORD,
   database: DB_DATABASE
})

const connect = async () => {
   try {
      const res = await connection.connect()
      if(res) console.log('Connected to the database')

   } catch (err) {
      console.log(err)
   }
}

connect()

module.exports = connection