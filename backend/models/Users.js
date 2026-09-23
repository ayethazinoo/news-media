const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UsersSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);

//Register
UsersSchema.statics.register = async function (name , email , password)  {
    console.log(name , email , password);
    
  let userInfo = await this.findOne({ email }); //check user already exist

  if (userInfo) {
    throw new Error("User is already exist...") 
  }

  let salt = await bcrypt.genSalt(); //hashing the password
  let hashValue = await bcrypt.hash(password, salt);

  let user = await this.create({ name, email, password: hashValue });

  return user;
};

//Login
UsersSchema.statics.login =async function (email , password){
  let user = await this.findOne({email})
  
  if(!user){
    throw new Error("EMAIL_NOT_FOUND")
  }
  
  let passwordStatus = await bcrypt.compare(password,user.password) //compare paintext and hashing pwd

  if(passwordStatus){
    return user;
  }else{
     throw new Error('PASSWORD_INCORRECT')
  }

}

module.exports = mongoose.model("Users", UsersSchema);
