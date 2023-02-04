const express = require('express');
const {DOMAIN,ITEMS_PATH} = require('../consts');
const db = require('../db/db');
const {Item} = require('../db/models');
const auth = require('../auth/middleware');
const {getItemsController} = require('../controllers/index')


const app = express();
app.get(DOMAIN+ITEMS_PATH, auth, getItemsController);


module.exports = app;