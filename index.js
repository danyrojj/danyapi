const http = require('http');
const express = require('express');
const {main,addItem, signIn,logIn} = require('./src/routs/index');
const db = require('./src/db/db') // i sorta need this import...

const port = process.env.PORT  || 3000;
const app = express();

app.use(signIn);
app.use(logIn);
app.use(main);
app.use(addItem);

const server = http.createServer(app);

server.listen(port, ()=>{
    console.log('running on port', port)
});


