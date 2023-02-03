const jwt = require('jsonwebtoken')
const {SECRET} = require('../consts');

class TokenHandler{
constructor(){}

generateToken(user){
    const t = jwt.sign(user,SECRET);
    return t;
}


verifyToken(token){
    return jwt.verify(token,SECRET);
}

revokeToken(token){
    // implement revoke from wherever it's saved
}

}


module.exports = TokenHandler;