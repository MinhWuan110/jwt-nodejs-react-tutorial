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
    console.log("check query: ",req.query)
    let page = req.query.page
    let limit = req.query.limit
    let data = await userApi.readUserpaginationFunc(+page,+limit)
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch(e) {
    console.log("have a error ", e);
    return res.status(500).json({
      EM: "error from server ", // error message
      EC: "-1", // error code
      DT: "", // date
    });
  }
};

    

const handleCreateUser = (req, res) => {};

const handleUpdateUser = (req, res) => {};


const handleDeleteUser = async (req, res) => {
  
  try{
    let data = await userApi.deleteFunc(req.body.id)
     return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT
    })
    }catch(e){
    console.log("you have one error",e);
    return res.status(500).json({
      EM: "error from server ",
      EC: "-1",
      DT: ""
    })

  }
};

module.exports = {
  handleReadUser,
  handleCreateUser,
  handleUpdateUser,
  handleDeleteUser
};
