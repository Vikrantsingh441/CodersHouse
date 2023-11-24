require ('dotenv').config();
const express = require('express');
const router = require('./routes')

const app = express();

const PORT = process.env.PORT || 5500;
app.use(express.json())
app.use(router);

app.get('/',(req,res)=>{
    res.send('hello from express js')
})

app.listen(PORT,()=> console.log(`Listening on port ${PORT}`))