const express = require('express');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');

const indexRouter = require('./routes');
const memberRouter = require('./routes/members');

dotenv.config();
const app = express();
console.log('process.env.PORT: ' + process.env.PORT);
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/', indexRouter);
app.use('/members', memberRouter);

// 404
app.use((req, res, next)=>{
    res.status(404).send('Not Found');
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'));
});