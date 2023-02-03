const TokenHandler = require('./tokenHandler');

const auth = (req,res,next) => {
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access denied - no access token provided');

    try{
        const tokenHandler = new TokenHandler();
        const decoded = tokenHandler.verifyToken(token)
        console.log({decoded});
        req.user = decoded;
        next();
    }catch(e){
        res.status(400).send('Invalid token');
    }
}


module.exports = auth