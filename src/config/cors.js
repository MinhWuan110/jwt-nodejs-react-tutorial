 
 require("dotenv").config()
 const configCors = (app) =>{
 app.use(function (req, res, next)  {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization')
        res.setHeader('Access-Control-Allow-Credentials', true)
        next()
    })
 }

 export default configCors
