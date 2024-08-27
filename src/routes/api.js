import express from "express";
const router = express.Router();
import apicontroller from "../controller/apicontroller";
import userApiController from "../controller/userApiController";
import groupApiController from "../controller/groupApiController"
/**
 *
 * @param {*} app express app
 */

const initApi = (app) => {
  console.log(apicontroller);
  console.log(userApiController);
  router.get("/test-api", apicontroller.testApi);
  router.post("/regester", apicontroller.handleRegester);
  router.post("/login", apicontroller.handleLogin);

  router.get("/user/read", userApiController.handleReadUser);
  router.post("/user/create", userApiController.handleCreateUser);
  router.put("/user/update", userApiController.handleUpdateUser);
  router.delete("/user/delete", userApiController.handleDeleteUser);

  router.get("/group/read",groupApiController.handleReadGroup )
  // app.use ở đây để khai báo đường link bắc dâu là gi
  return app.use("/api/v1/", router);
};
export default initApi;
