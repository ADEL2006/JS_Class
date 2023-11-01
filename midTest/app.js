const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const helloRouter = require('./routes/hello');
const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const addRouter = require('./routes/add');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use('/', homeRouter); // 미들웨어 선언 
app.use('/hello', helloRouter);
app.use('/users', usersRouter);
app.use('/add', addRouter);
app.use((req, res, next) => {
	res.status(404).render('error');
  });

app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});

app.listen(app.get('port'), () => {
    console.log('Server Starting port: ', app.get('port'));
});