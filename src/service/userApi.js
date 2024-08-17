import db from "../models/index";

const readFunc = async () => {
  try {
    let user = await db.User.findAll();
    if (user) {
      return {
        EM: "get data susscess",
        EC: "0",
        DT: user,
      };
    } else {
      return {
        EM: "get data wrong ",
        EC: "0",
        DT: [],
      };
    }
  } catch(e) {
    console.log("have a error ", e)
    return{
        EM: "something wrong with service",
        EC:"1",
        DT:[]
    }
  }
};

const createFunc = () => {};

const updateFunc = () => {};

const deleteFunc = () => {};

module.exports = {
  readFunc,
  createFunc,
  updateFunc,
  deleteFunc,
};
