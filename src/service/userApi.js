import db from "../models/index";
import bcrypt from "bcryptjs";

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
    let offset = (page - 1) * limit; // xác định vị  trí bắc đầu lấy dữ liệu
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

const createFunc = async (req, res) => {
  const { email, phone, username, password, sex, group } = req.body; // Thêm req, res vào tham số nếu cần
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new db.User({
      email,
      phone,
      username,
      password: hashedPassword,
      sex,
      group,
    });
    await newUser.save();
    return {
      EC: 0,
      message: "User created successfully",
      DT: newUser,
    };
  } catch (error) {
    return {
      EC: 1,
      message: error.message,
      DT: "",
    };
  }
};

const updateFunc = async (userid, userData) => {
  try {
    // Tìm người dùng theo ID và sử dụng await để lấy kết quả
    const user = await db.User.findOne({ where: { id: userid } });

    if (!user) {
      return {
        EC: 1, // Mã lỗi nếu không tìm thấy người dùng
        EM: "User not found",
      };
    }

    if (userData.password) {
      const salt = await bcrypt.genSalt(10); // Tạo salt
      userData.password = await bcrypt.hash(userData.password, salt); // Hash mật khẩu
    }
    // Cập nhật thông tin người dùng
    Object.assign(user, userData); // Cập nhật thông tin từ userData

    await user.save(); // Lưu thông tin đã cập nhật vào CSDL

    return {
      EC: 0, // Thành công
      EM: "User updated successfully",
      user, // Có thể trả về thông tin người dùng đã cập nhật
    };
  } catch (error) {
    console.error("Error updating user:", error);
    return {
      EC: 2, // Mã lỗi cho trường hợp không xác định
      EM: "An error occurred while updating user",
    };
  }
};

const deleteFunc = async (userid) => {
  try {
    const user = await db.User.findOne({ where: { id: userid } });
    if (user) {
      await db.User.destroy({ where: { id: user.id } });
      return {
        EM: "Delete data success",
        EC: 0,
        DT: "",
      };
    } else {
      return {
        EM: "User not exist",
        EC: 1,
        DT: "",
      };
    }
  } catch (e) {
    console.log("Error: ", e);
    return {
      EM: "Error from server",
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
