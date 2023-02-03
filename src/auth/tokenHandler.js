const jwt = require('jsonwebtoken')

const secret = 'huy'

class TokenHandler{
constructor(){}

generateToken(){
    const t = jwt.sign('myshopisgood',secret);
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