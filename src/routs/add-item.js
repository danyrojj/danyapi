const { DOMAIN, ITEMS_PATH } = require('../consts');
const express = require('express');
const mongoose = require('../db/db');
const {Item} = require('../db/models');
const {addItemController} = require('../controllers')

const app = express();

app.use(express.json());
app.post(DOMAIN+ITEMS_PATH,addItemController
)


module.exports = app