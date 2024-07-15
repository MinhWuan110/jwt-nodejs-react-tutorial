// dung để mã hóa mật khẩu băm mật khẩu lk với line 35 
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);


// Create the connection to databases
import mysql from 'mysql2/promise';
// const connection =  mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123456',
//   database: 'jwt'

// });
import db from '../models/index';

const hashUserPassWord = (userPassWord) =>{
      let hashPassWord = bcrypt.hashSync(userPassWord, salt);
      return hashPassWord
}

const createNewUser = async (email, password, username ) =>{
    let hashPassWord = hashUserPassWord(password)
    // console.log("check db ", db)
    try {
        await db.User.create({
            username : username,
            email: email,
            password: hashPassWord
        })
    }catch(error){
        console.log(error)
    }
    // const conn = await mysql.createConnection({ host: 'localhost',  user: 'root',password: '123456', database: 'jwt'});
    // const [rows, fields] =
    // await conn.execute( `INSERT INTO jwt.user (email, password, username) 
    // VALUES (?, ?, ?); `, [email, hashPassWord, username]);

    
}

const getUserList = async() =>{
    let user = [];
    const conn = await mysql.createConnection({ host: 'localhost',  user: 'root',password: '123456', database: 'jwt'});
    const [rows, fields] = await conn.execute( `select * from user `);
    return rows
}

const deleteUser = async (id) =>{
    
    const conn = await mysql.createConnection({ host: 'localhost',  user: 'root',password: '123456', database: 'jwt'});
    const [rows, fields] = await conn.execute( `DELETE FROM user WHERE id=? `,[id]);
    return rows

}

const getUserById = async(id) =>{
    const conn = await mysql.createConnection({ host: 'localhost',  user: 'root',password: '123456', database: 'jwt'});
    const [rows, fields] = await conn.execute( `select * FROM user WHERE id=? `,[id]);
    return rows
}

const updateUser = async (userName, userEmail,id) =>{
    const conn = await mysql.createConnection({ host: 'localhost',  user: 'root',password: '123456', database: 'jwt'});
    const [rows, fields] = await conn.execute( `update user set username= ? , email = ? where id=? `,[userName, userEmail,id]);
    return rows

}
module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
    getUserById,
    updateUser

}