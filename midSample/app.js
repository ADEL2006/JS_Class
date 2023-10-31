const express = require('express');
const indexRouter = require('./routes/index');
const studentRouter = require('./routes/student');
const nunjucks = require('nunjucks');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use('/', indexRouter); // 미들웨어 선언 
app.use('/student', studentRouter);

app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});

app.listen(app.get('port'), () => {
    console.log('Server Starting port: ', app.get('port'));
})