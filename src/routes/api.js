import express from "express";
const router = express.Router();
import loginRegisterApiController from '../controller/loginRegisterApiController';
import userApiController from "../controller/userApiController";
import groupApiController from "../controller/groupApiController";

 
/**
 *
 * @param {*} app express app
 */

const initApi = (app) => {
  // console.log(apicontroller);
  // console.log(userApiController);
  router.get("/test-api", loginRegisterApiController.testApi);
  router.post("/regester", loginRegisterApiController.handleRegester);
  router.post("/login",loginRegisterApiController.handleLogin);

  
  router.post("/users/create", userApiController.handleCreateUser);
  router.get("/user/read", userApiController.handleReadUser);
  router.delete("/user/delete/:userid", userApiController.handleDeleteUser);
  // router.put('/user/edit/:userid', handleUpdateUser);
  // router.post("/user/create", userApiController.handleCreateUser);
  // router.put("/user/update", userApiController.handleUpdateUser);

  router.get("/group/read", groupApiController.handleReadGroup);

  // app.use ở đây để khai báo đường link bắc dâu là gi
  return app.use("/api/v1/", router);
};
export default initApi;
