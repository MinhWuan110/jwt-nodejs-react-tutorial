const testApi = (req, res) =>{
    return res.status(200).json({
        messgage: 'ok',
        data: 'test api '
    })
}

const handleRegester = (req, res) =>{
    // return res.status(200).json({
    //     console.log()
    // })
    try{

    }catch(e){
        return res.status(500).json({
            EM: 'error from server ',// error message
            EC:  '-1', // error code 
            DT: '',// date 
        })
    }
    console.log("chay dc handleregester ", req.body) 
}

module.exports ={
    testApi,
    handleRegester
}