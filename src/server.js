import express from "express"
import configViewEngine from "./config/viewEgine"
import configCors from "./config/cors"
import initWebRotes from "./routes/web"
import bodyparser from "body-parser"
import initApi from "./routes/api"

// import connection from "./config/connectioDB"
// khai báo như vầy để lấy có thể sưr dụng được file env process
require("dotenv").config()
const app = express();
const port = process.env.PORT || 8081

// để kết nối với forndend
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL); // Replace with your React.js app's URL
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });




// config body-parser 
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))


// config viewEngine 
configViewEngine(app);
configCors(app)
// init web routes 
initWebRotes(app);
initApi(app)

// connection()



app.listen(port,()=>{
    console.log(">>> Da chay duoc tren port "+ port)
})
