const express = require('express');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');

const crawlingRouter = require('./routes/crawling');

dotenv.config();
const app = express();
console.log('process.env.PORT :' , process.env.PORT);
app.set('port', process.env.PORT || 3000);


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/apis',crawlingRouter);



app.listen(app.get('port'), ()=>{
    console.log(app.get('port'));
});