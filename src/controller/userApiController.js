import userApi from "../service/userApi";
import db from "../models/index";
// khi chưa phân trang
// const handleReadUser = async (req, res) => {
//   try {
//     let data = await userApi.readFunc();

//     return res.status(200).json({
//       EM: data.EM,
//       EC: data.EC,
//       DT: data.DT,
//     });
//   } catch(e) {
//     console.log("have a error ", e);
//     return res.status(500).json({
//       EM: "error from server ", // error message
//       EC: "-1", // error code
//       DT: "", // date
//     });
//   }
// };

// lấy dữ liệu theo phân trang
const handleReadUser = async (req, res) => {
  try {
    console.log("check query: ", req.query);
    let page = req.query.page;
    let limit = req.query.limit;
    let data = await userApi.readUserpaginationFunc(+page, +limit);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (e) {
    console.log("have a error ", e);
    return res.status(500).json({
      EM: "error from server ", // error message
      EC: "-1", // error code
      DT: "", // date
    });
  }
};

const handleCreateUser = async (req, res) => {
  const result = await userApi.createFunc(req, res); // Truyền req và res vào createFunc
  if (result.EC === 0) {
    res.status(201).json(result);
  } else {
    res.status(400).json(result);
  }
};

const handleGetEdit = async (req, res) => {
  const { userid } = req.params; // Lấy userid từ tham số URL
  let data = await db.User.findOne({ where: { id: userid } });
  console.log(data);
  // Kiểm tra xem dữ liệu có hợp lệ không
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(400).json(data);
  }
};

const handleUpdateUser = async (req, res) => {
  const { userid } = req.params;
  const userData = req.body; // Lấy dữ liệu người dùng từ body của request

  const result = await userApi.updateFunc(userid, userData);
  if (result.EC === 0) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};

const handleDeleteUser = async (req, res) => {
  const { userid } = req.params; // Lấy userid từ tham số URL
  const result = await userApi.deleteFunc(userid);
  if (result.EC === 0) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};

const handleReadProducts = async (req, res) => {
    try {
      const products = await db.SanPham.findAll(); // Lấy tất cả sản phẩm từ bảng SanPham
      res.status(200).json(products); // Trả về danh sách sản phẩm dưới dạng JSON
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Lỗi khi lấy danh sách sản phẩm." }); // Trả về thông báo lỗi
    }
}

module.exports = {
  handleReadUser,
  handleCreateUser,
  handleUpdateUser,
  handleDeleteUser,
  handleUpdateUser,
  handleGetEdit,
  handleReadProducts,
};
