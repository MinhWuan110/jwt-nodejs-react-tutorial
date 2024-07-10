import express from "express"
import configViewEngine from "./config/viewEgine"
import initWebRotes from "./routes/web"
import bodyparser from "body-parser"
// khai báo như vầy để lấy có thể sưr dụng được file env process
require("dotenv").config()


const app = express();
const port = process.env.PORT || 8081

// config body-parser 
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))


// config viewEngine 
configViewEngine(app);
// init web routes 
initWebRotes(app);



app.listen(port,()=>{
    console.log(">>> Da chay duoc tren port "+ port)
})
