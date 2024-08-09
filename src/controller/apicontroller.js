import userloginRegisterService from '../service/userloginRegisterService'
const testApi = (req, res) =>{
    return res.status(200).json({
        messgage: 'ok',
        data: 'test api '
    })
}

const handleRegester = async(req, res) =>{
    try{
        if(!req.body.email || !req.body.password || !req.body.username  ){
            return res.status(200).json({
                EM: 'Missing required ',
                EC: 1,
                DT: ''
            })
        }

        let Data = await userloginRegisterService.ResgisterNewUser(req.body) 
        return res.status(200).json({
                EM: Data.EM,
                EC: Data.EC
            })

    }catch(e){
        return res.status(500).json({
            EM: 'error from server ',// error message
            EC:  '-1', // error code 
            DT: '',// date 
        })

    }
}


module.exports ={
    testApi,
    handleRegester
}