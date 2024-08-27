import db from "../models/index"
const readGroupFunc = async () => {
    try{
        let data = await db.Group.findAll()
         return{
            EM:"get Data Group Success",
            EC:0,
            DT:data
        }
    }catch(e){
        console.log("you have one error !", e)
        return{
            EM:"something wrong with service",
            EC:1,
            DT:[]
        }
    }
}

module.exports= {
    readGroupFunc
}