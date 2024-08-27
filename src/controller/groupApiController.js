import groupApi from "../service/groupApi";

const handleReadGroup =async (req, res) => {
  try {
    let data =await groupApi.readGroupFunc()
    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, // error code
      DT: data.DT, // date
    });
  } catch (e) {
    console.log("you have one error", e);
    return res.status(500).json({
      EM: "error from server ", // error message
      EC: "-1", // error code
      DT: "", // date
    });
  }
};

module.exports = {
    handleReadGroup
};
