import userService from '../service/userService'


const handleHelloWorl = (req, res) => {
    // model  get data from database
     return res.render("home.ejs") 
}

const handleuserpage = (req, res) =>{
    return res.render("user.ejs")
}

const handleCreateNewUser = (req, res) =>{
    let email = req.body.emailName
    let password = req.body.passWord
    let username = req.body.userName 
    userService.createNewUser(email, password, username)
    return res.send("đã gửi được thông tin ")
}

  userService.getUserList()
  

module.exports = {
    handleHelloWorl,
    handleuserpage,
    handleCreateNewUser
}