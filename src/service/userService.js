// dung để mã hóa mật khẩu băm mật khẩu lk với line 35 
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

// Create the connection to database
import mysql from 'mysql2';
const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'jwt'

});

const hashUserPassWord = (userPassWord) =>{
      let hashPassWord = bcrypt.hashSync(userPassWord, salt);
      return hashPassWord
}

const createNewUser = (email, password, username ) =>{
    let hashPassWord = hashUserPassWord(password)
    connection.query(
        `INSERT INTO jwt.users (email, password, username) 
         VALUES (?, ?, ?); `,
         [email, hashPassWord, username],
        function(err, results, fields) {
            if(err){
                console.log(err)
            }
            console.log(results)
        }
    )
}

const getUserList = () =>{
    let users = [];
    connection.query(
        `select * from users `,
        function(err, results, fields) {
            if(err){
                console.log(err)
            }
            console.log("check results",results)
        }
    )
}

module.exports = {
    createNewUser,
    getUserList

}