import userloginRegisterService from "../service/userloginRegisterService";
const testApi = (req, res) => {
  return res.status(200).json({
    messgage: "ok",
    data: "test api ",
  });
};

const handleRegester = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.username) {
      return res.status(200).json({
        EM: "Missing required ",
        EC: 1,
        DT: "",
      });
    }

    let Data = await userloginRegisterService.ResgisterNewUser(req.body);
    return res.status(200).json({
      EM: Data.EM,
      EC: Data.EC,
    });
  } catch (e) {
    return res.status(500).json({
      EM: "error from server ", // error message
      EC: "-1", // error code
      DT: "", // date
    });
  }
};

const handleLogin = async (req, res) => {
  try {
    let data = await userloginRegisterService.loginUser(req.body);
    return res.status(200).json({
      EM : data.EM,
      EC: data.EC,
      DT: data.DT
    });
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      EM: "error from server ", // error message
      EC: "-1", // error code
      DT: "", // data
    });
  }
};

module.exports = {
  testApi,
  handleRegester,
  handleLogin,
};
