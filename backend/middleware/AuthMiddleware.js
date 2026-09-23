const jwt = require ('jsonwebtoken')    //check token valid or invalid

const AuthMiddleware = (req,res,next)=>{
    //tuntun@gmail.com tuntun(login info)
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.JWT_SECRET_KEY , (err)=>{
            if(err){
                return res.json({ message : 'Token does not match ...' })
            }else{
                next();
            }
        })
    }else{
        return res.json({ message : 'Token does not match ...' })
    }
    

}
module.exports = AuthMiddleware;