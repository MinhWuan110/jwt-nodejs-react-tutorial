import db from "../models/index";

const readFunc = async () => {
  try {
    let user = await db.User.findAll({
      attributes: ["id", "username", "email", "phone", "sex"],
      include: { model: db.Group, attributes: ["name", "description"] },
      // nest: true
    });
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
  } catch (e) {
    console.log("have a error ", e);
    return {
      EM: "something wrong with service",
      EC: "1",
      DT: [],
    };
  }
};

const readUserpaginationFunc = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    const { count, rows } = await db.User.findAndCountAll({
      offset: offset,
      limit: limit
      // sort: xếp theo id hoặc a đến z 
    });
    let totalPage =Math.ceil(count/limit);
    let data = {
      totalRows: count,
      totalPage: totalPage,
      users: rows
    }
    return {
        EM: "get data susscess",
        EC: "0",
        DT: data,
      };
  } catch (e) {
    console.log(e);
    return {
      EM: "something wrong with service",
      EC: "1",
      DT: [],
    };
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
  readUserpaginationFunc,
};
