const jwt=require("jsonwebtoken")
const scret="avi2024"

module.exports=(req,res,next)=>{
    token=req.headers['authorization']
    console.log(token);
    jwt.verify(token,scret,(err,decode)=>{
        if(err){
            res.json({
                status:401,
                success:false,
                msg:"Unauthenicated user "
            })
        }
        else{
            next()
        }
    })

}