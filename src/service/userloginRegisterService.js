import db from "../models/index";
import { Op } from "sequelize";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

const checkemailexist = async (email) => {
  let emailcheck = await db.User.findOne({ where: { email: email } });
  if (emailcheck) {
    return true;
  }
  return false;
};

const checkphoneexist = async (phone) => {
  let phonecheck = await db.User.findOne({ where: { phone: phone } });
  if (phonecheck) {
    return true;
  }
  return false;
};

const hashUserPassWord = (userPassWord) => {
  let hashPassWord = bcrypt.hashSync(userPassWord, salt);
  return hashPassWord;
};

const ResgisterNewUser = async (rawuser) => {
  try {
    // kiem tra du lieu them vao co bi trung hay khong
    let ismailexist = await checkemailexist(rawuser.email);
    if (ismailexist === true) {
      return {
        EM: "email is already exist ",
        EC: 1,
      };
    }

    let isphoneexist = await checkphoneexist(rawuser.phone);
    if (isphoneexist === true) {
      return {
        EM: "phone is already exist ",
        EC: 1,
      };
    }
    //hash password
    let hashPassWord = hashUserPassWord(rawuser.password);
    // them user vao database
    await db.User.create({
      email: rawuser.email,
      username: rawuser.username,
      phone: rawuser.phone,
      password: hashPassWord,
    });
    return {
      EM: " user has been added successfully",
      EC: 0,
    };
  } catch (e) {
    console.error("Error in ResgisterNewUser:", e);
    return {
      EM: " something wrong in service ",
      EC: -2,
    };
  }
};

const checkPassword = (password, hashPassWord) => {
  return  bcrypt.compareSync(password, hashPassWord);
};

const loginUser = async (rawuser) => {
  let findUser = await db.User.findOne({
    where: {
      [Op.or]: [{ email: rawuser.valueLogin }, { phone: rawuser.valueLogin }],
    },
  });
  if (findUser) {
    let check = checkPassword(rawuser.password, findUser.password);
    if (check === true ) {
      console.log("valuelogin and password is correct ")
      return {
        EM : "all correct ",
        EC: 0,
        DT: ""
      }
    }
  }
  console.log("valuelogin or password is wrong ",rawuser.valueLogin , " ", rawuser.password)
    return {
        EM : "valuelogin or password is wrong",
        EC: 1,
        DT: ""
      }
};

module.exports = {
  ResgisterNewUser,
  loginUser,
};
