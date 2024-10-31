import userApi from "../service/userApi";

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

const handleUpdateUser = (req, res) => {};

const handleDeleteUser = async (req, res) => {
   const { userid } = req.params; // Lấy userid từ tham số URL
  const result = await userApi.deleteFunc(userid);
  if (result.EC === 0) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};

module.exports = {
  handleReadUser,
  handleCreateUser,
  handleUpdateUser,
  handleDeleteUser,
};
