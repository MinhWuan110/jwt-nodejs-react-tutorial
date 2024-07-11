import express from "express"
import { handleHelloWorl, handleuserpage, handleCreateNewUser , handleDeleteUser , handlegetUserById, handleUpdateUser} from "../controller/homeController"
const router = express.Router()

/**
 * 
 * @param {*} app express app 
 */





const initWebRotes = (app) => {
    router.get("/", handleHelloWorl)

    router.get("/users", handleuserpage)

    router.post("/users/create-users", handleCreateNewUser)

    router.post("/delete-user/:id", handleDeleteUser)

    router.get("/update-User/:id", handlegetUserById)

    router.post("/users/update-users/", handleUpdateUser)


    // app.use ở đây để khai báo đường link bắc dâu là gi 
    return app.use("/", router)

}
export default  initWebRotes

