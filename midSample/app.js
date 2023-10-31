const express = require('express');
const indexRouter = require('./routes');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use('/', indexRouter); // 미들웨어 선언 

app.listen(app.get('port'), () => {
    console.log('Server Starting port: ', app.get('port'));
})