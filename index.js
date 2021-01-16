const mysql = require('mysql')
require('dotenv').config()

const conection = mysql.createConnection({
    port:process.env.PORT,
    user:process.env.USUARIO, 
    password:process.env.PASSWORD, 
    host:process.env.HOST, 
    database:process.env.DATABASE
})

conection.connect((er)=>{
if (er){
    console.log(er)
}
console.log("Base de datos conectada")
})