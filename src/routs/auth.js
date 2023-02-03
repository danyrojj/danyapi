const { PREFIX } = require('../consts');
const express = require('express');
const mongoose = require('../db');
const bodyParser = require('body-parser');

const app = express();

console.log(PREFIX)
app.use(express.json());

app.post(PREFIX + '/sign-in', async (req, res) => {
    console.log('huy', req.body)
    const { usr, pwd } = req.body;
    const Users = mongoose.connection.collection('usrs');
    // console.log('piza',Users)
    const user = await Users.findOne({ usr });

    console.log('piza', { user });
    if (res) {
        res.status(409).send('user already exists');
    } else {
        res.send(204);
    }




});


module.exports = app