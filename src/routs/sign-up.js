const { DOMAIN } = require('../consts');
const express = require('express');
const {signUpController} = require('../controllers/index');

const app = express();
app.use(express.json());

app.post(DOMAIN + '/sign-up', signUpController);


module.exports = app