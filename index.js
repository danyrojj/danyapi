const http = require('http');
const express = require('express');
const {main, signIn,logIn} = require('./src/routs/index');
const db = require('./src/db/db') // i sorta need this import...

const port = process.env.PORT  || 3000;
const app = express();

app.use(main);
app.use(signIn);
app.use(logIn);

const server = http.createServer(app);

server.listen(port, ()=>{
    console.log('running on port', port)
});


