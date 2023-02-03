const { PREFIX } = require('../consts');
const express = require('express');
const mongoose = require('../db/db');
const {User} = require('../db/models');
const e = require('express');
const TokenHandler = require('../auth/tokenHandler');

const app = express();

app.use(express.json());

app.post(PREFIX + '/log-in', async (req, res) => {
    const { usr, pwd } = req.body;
    const Users = mongoose.connection.collection('users');
    const user = await Users.findOne({name: usr });
    if (user) {
        if(user.pwd === pwd){
            const accessToken = new TokenHandler().generateToken(user);
            // generate token and send in response (where) exacltly?)
            res.status(200).send({accessToken});// check code
        }else{
            console.log('log in error, login or password invalid, try again')
            res.status(403).send('log in error, login or password invalid, try again')
        }
    } else {
       console.log('user doesnt exist');
    res.status(400).send('username doesnt exist')
    }




});


module.exports = app