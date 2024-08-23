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
        EC: 0,
        DT: user,
      };
    } else {
      return {
        EM: "get data wrong ",
        EC: 0,
        DT: [],
      };
    }
  } catch (e) {
    console.log("have a error ", e);
    return {
      EM: "something wrong with service",
      EC: 1,
      DT: [],
    };
  }
};

const readUserpaginationFunc = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    const { count, rows } = await db.User.findAndCountAll({
      attributes: ["id", "username", "email", "phone", "sex"],
      include: { model: db.Group, attributes: ["name", "description"] },
      offset: offset,
      limit: limit,
      // sort: xếp theo id hoặc a đến z
    });
    let totalPage = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPage: totalPage,
      users: rows,
    };
    return {
      EM: "get data susscess",
      EC: 0,
      DT: data,
    };
  } catch (e) {
    console.log(e);
    return {
      EM: "something wrong with service",
      EC: 1,
      DT: [],
    };
  }
};

const createFunc = () => {};

const updateFunc = () => {};

const deleteFunc = async (userid) => {
  try {
    let user = await db.User.findOne({
      where: { id: userid },
    });
    if (user) {
      await db.User.destroy({
        where: {
          id: user.id,
        },
      });
      return {
        EM: "delete data susscess",
        EC: 0,
        DT: "",
      };
    } else {
      return {
        EM: "user not exist",
        EC: 1,
        DT: "",
      };
    }
  } catch (e) {
    console.log("you have one error: ", e);
    return {
      EM: "error from server ",
      EC: 1,
      DT: "",
    };
  }
};

module.exports = {
  readFunc,
  createFunc,
  updateFunc,
  deleteFunc,
  readUserpaginationFunc,
};
