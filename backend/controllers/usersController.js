const Users = require('../models/Users');
const createToken = require('../jwt/createToken');

const usersController = {
    login :async (req,res)=>{
        try{
            let { email , password } = req.body
            let user = await Users.login(email , password)
            let token = createToken();
            res.cookie('jwt',token,{ maxAge : 60*60*24*5*1000 , httpOnly : true })   //expire date with ms

            return res.status(200).json({user,token})           

        }catch(e){
            let errors={}
            if(e.message === "EMAIL_NOT_FOUND"){
                errors.email = "Email doesn't match..."
            }
            if(e.message === "PASSWORD_INCORRECT"){
                errors.password = "Password is incorrect..."
            }
            return res.status(400).json({ errors })
        }
    },
    register :async (req,res)=>{

        try{
            let { name , email , password } =req.body;            
            let user = await Users.register(name , email , password);
            let token = createToken();
            res.cookie('jwt',token,{ maxAge : 60*60*24*5*1000 , httpOnly : true })   //expire date with ms

            return res.status(200).json({user,token})

        }catch(e){
            return res.status(400).json({ errors : e.message })
        }
        
    },

    logout : (req,res) =>{
        res.cookie('jwt','',{ maxAge : 1 })     //delete cookie
        return res.json({ message : 'logout process is running...' })
    }

}

module.exports = usersController;