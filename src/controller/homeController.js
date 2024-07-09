const handleHelloWorl = (req, res) => {
    // model  get data from database
     return res.render("home.ejs") 
}


const handleuserpage = (req, res) =>{
    return res.render("user.ejs")
}
module.exports = {
    handleHelloWorl,
    handleuserpage
}