const express = require('express');
const {DOMAIN,ITEMS_PATH} = require('../consts');
const mongoose = require('../db/db');
const {Item} = require('../db/models');
const auth = require('../auth/middleware');



const app = express();

app.get(DOMAIN+ITEMS_PATH, auth, async (req,res)=>{
    
    try{
        const items = await Item.find();
           
        res.status(200).send(items);
    }catch(e){
        console.log('req invalid');
        res.status(500).send('req invalid');
    }
});


module.exports = app;