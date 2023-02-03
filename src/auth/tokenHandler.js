const jwt = require('jsonwebtoken')

const {secret} = require('../config/index');

class TokenHandler{
constructor(){}

generateToken(user){
    const t = jwt.sign(user,secret);
    return t;
}


verifyToken(token){
    return jwt.verify(token,secret);
}

revokeToken(token){
    // implement revoke from wherever it's saved
}

}


module.exports = TokenHandler;