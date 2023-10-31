const express = require('express');
const indexRouter = require('./routes/index');
const studentRouter = require('./routes/student');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use('/', indexRouter); // 미들웨어 선언 
app.use('/student', studentRouter);

app.listen(app.get('port'), () => {
    console.log('Server Starting port: ', app.get('port'));
})