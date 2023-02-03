const express = require('express');
const {PREFIX} = require('../consts');

const app = express();

app.get(PREFIX+'/items', (req,res)=>{




    res.status(201).send(["data"]);
});


module.exports = app;