import express from "express"
import { handleHelloWorl, handleuserpage, handleCreateNewUser } from "../controller/homeController"
const router = express.Router()

/**
 * 
 * @param {*} app express app 
 */





const initWebRotes = (app) => {
    router.get("/", handleHelloWorl)

    router.get("/users", handleuserpage)

    router.post("/users/create-users", handleCreateNewUser)


    // app.use ở đây để khai báo đường link bắc dâu là gi 
    return app.use("/", router)

}
export default  initWebRotes

