import express from "express"
const router = express.Router()
import apicontroller from "../controller/apicontroller"
/**
 * 
 * @param {*} app express app 
 */





const initApi = (app) => {


    router.get("/api/v1/test-api",apicontroller.testApi)
    router.post("/api/v1/regester",apicontroller.handleRegester)
    router.post("/api/v1/login",apicontroller.handleLogin)
    // app.use ở đây để khai báo đường link bắc dâu là gi 
    return app.use("/", router)

}
export default  initApi



