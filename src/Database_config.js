const mysql=require('mysql2');
const connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'school_management_systemm'
}).promise();

module.exports=connection