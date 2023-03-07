// create our mysql connection here
import mysql from "mysql";

export const db = mysql.createConnection({
    host:"localhost",
    port:"3307",
    user:"root",
    database:"socials"
});

db.connect((err)=>{
if(err) return console.log("database connection not successful");
return console.log("connection secured");
})
