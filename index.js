require('dotenv').config();
const express = require('express');
const app = express()
const connect = require('./utilities/connect');

const port = process.env.PORT;

const routes = require('./routes/index')

app.use('/favicon.ico', express.static('assets/favicon.ico'));

app.use(express.json());

app.use('/api/v1/test', routes.test);
app.use('/api/v1/book', routes.book);

app.get("/",(req, res)=>{
    res.send('hello');
})

const start = async () => {
    try{
        await connect();
        app.listen(port, ()=>{
            console.log(`server listening on port ${port}`)
        })
    }catch(error){
        console.log(error);
    }
}

start();