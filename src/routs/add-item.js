const { DOMAIN, ITEMS_PATH } = require('../consts');
const express = require('express');
const mongoose = require('../db/db');
const {Item} = require('../db/models');

const app = express();

app.use(express.json());
app.post(DOMAIN+ITEMS_PATH, async (req,res)=>{

    const payload = req.body;
    console.log({payload})
    // if(!payload)res.status(500).send('no body')

    if(Item.validate(payload)){
        // Item.insert(payload)
        const newItem =  Item(payload);
        newItem.save((error) => {
            if (error) {
              console.log(error);
              res.status(500).send(error);
            } else {
                console.log('Item saved successfully!');
                res.status(200).send('item saved'); 
            }
        })
    }else{
        res.status(500).send('invalid body')
    }
})


module.exports = app