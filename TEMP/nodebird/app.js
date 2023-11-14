const express = require('express');
const nunjcucks = require('nunjcucks');
const dotenv = require('dotenv');
const path = require('path');
const { request } = require('http');

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'html');
nunjcucks.config('views', {
    express: app,
    watch: true,
});
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false
    }
}));
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다`);
    error.status = 404;
    next(error);
})
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
})