const http = require('http');
const express = require('express');
const {main,addItem, signUp,logIn} = require('./src/routs/index');
const db = require('./src/db/db') // i sorta need this import...
const {port} = require('./src/config');
const app = express();

app.use(signUp);
app.use(logIn);
app.use(main);
app.use(addItem);

const server = http.createServer(app);

server.listen(port, ()=>{
    console.log('running on port', port)
});


