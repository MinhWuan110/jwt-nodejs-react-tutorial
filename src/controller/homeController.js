import userService from '../service/userService'


const handleHelloWorl = (req, res) => {
    // model  get data from database
     return res.render("home.ejs") 
}

const handleuserpage = async (req, res) =>{
    const userList =  await userService.getUserList()
    console.log(userList)
    // await userService.deleteUser()
    return res.render("user.ejs", {userList})
}

const handleCreateNewUser = (req, res) =>{
    let email = req.body.emailName
    let password = req.body.passWord
    let username = req.body.userName 
    userService.createNewUser(email, password, username)
    return res.redirect("/users")
}

const handleDeleteUser = async (req, res)=>{
    await userService.deleteUser(req.params.id)
    return res.redirect("/users")
}



 
  

module.exports = {
    handleHelloWorl,
    handleuserpage,
    handleCreateNewUser,
    handleDeleteUser
}