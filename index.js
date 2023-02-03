const http = require('http');
const express = require('express');
const {main, auth} = require('./src/routs/index');
const mongoose = require('./src/db');

const port = process.env.PORT  || 3000;
const app = express();

app.use(main);
app.use(auth);

const server = http.createServer(app);

server.listen(port, ()=>{
    console.log('running on port', port)
});


