const {UserService} = require('../services/index');

const controller = async (req, res) => {
    const { usr, pwd } = req.body;
    const userService = new UserService();
    const {status, message} = await userService.signUp(usr,pwd);
    res.status(status).send(message);
}


module.exports = controller;
