const {User} = require('../db/models');

class UserService {
    constructor(){}

    signUp = async (usr, pwd)=>{
        const user = await User.findOne({name:usr});
        if(user){
             return {status:409, message:'username taken'};
        }else{
            const newUser = User({name:usr, pwd})
            try{
                    await newUser.save();
                    return {status:200, message:'signed up successfully'}
            }catch(e){
                        return {status:500, message:e.toString()}
            }
        }
    }
    logIn = async (user)=>{}
}



module.exports = UserService;