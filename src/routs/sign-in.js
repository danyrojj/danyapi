const { PREFIX } = require('../consts');
const express = require('express');
const mongoose = require('../db/db');
const {User} = require('../db/models');

const app = express();

console.log(PREFIX)
app.use(express.json());

app.post(PREFIX + '/sign-in', async (req, res) => {
    const { usr, pwd } = req.body;


    // do i need this ??? think no
    // mongoose.connection.openUri('mongodb://localhost:27017/test')
    // const Users = mongoose.connection.collection('users');
    // const user = await Users.findOne({name: usr });
    const user = await User.findOne({name:usr});

    console.log({ user });
    if (user) {
        res.status(409).send('username taken');// check code
    } else {
        const newUser = User({name:usr, pwd})
        console.log('????', newUser)
        newUser.save((error) => {
            if (error) {
              console.log(error);
              res.status(500).send(error);
            } else {
                console.log('Item saved successfully!');
                res.status(200).send('signed in successfully'); 
            }
        });
    }




});


module.exports = app