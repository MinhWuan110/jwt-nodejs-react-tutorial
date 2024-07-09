import express from "express"

/**
 * 
 * 
 * @param {*} app - express app 
 */
const configViewEngine = (app) =>{
    app.use(express.static('./src/public'))
    app.set('view engine', 'ejs') // định nghia sừ dungj công nghệ viewengine gì 
    app.set('views', './src/views') // định nghia file được lưu trữ ở đâu 

}



export default configViewEngine
