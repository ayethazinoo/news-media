var jwt = require('jsonwebtoken');

let expireDate = 60*60*24*5;    //5days

module.exports = function createToken (){
    return jwt.sign({ foo: 'bar' }, process.env.JWT_SECRET_KEY ,{ expiresIn : expireDate });
}