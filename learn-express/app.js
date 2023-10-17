const express = require('express');
const morgan = require('morgan');
const path = require('path');

const indexRouter = require('./routes');
const memberRouter = require('./routes/members');

const app = express();
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