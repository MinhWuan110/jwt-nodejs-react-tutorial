import userApi from "../service/userApi";

const handleReadUser = async (req, res) => {
  try {
    let data = await userApi.readFunc();

    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch {
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

const handleDeleteUser = (req, res) => {};

module.exports = {
  handleReadUser,
  handleCreateUser,
  handleUpdateUser,
  handleDeleteUser
};
