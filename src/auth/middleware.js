const TokenHandler = require('./tokenHandler');

const auth = (req,res,next) => {
    const token = req.header('authorization').split(' ')[1]; // get rid of bearer
    console.log(token)
    if(!token) return res.status(401).send('Access denied - no access token provided');

    try{
        const tokenHandler = new TokenHandler();
        const decoded = tokenHandler.verifyToken(token)
        req.user = decoded;
        next();
    }catch(e){
        res.status(400).send('Invalid token');
    }
}


module.exports = auth