const express=require('express');
require('dotenv').config({path:'./config.env'});
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const path=require('path');

require('./db/conn');

const app=express();
const port=process.env.PORT || 9000;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:"50mb",extended:false}));

app.use('/api',require('./routes/code'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,  "client/build", "index.html"));
      });
}

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})